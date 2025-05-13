import React, { createContext, useEffect, useState,useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../bibliotecas/config.js";
import useAppContext from "../hooks/useAppContext.jsx";
import { validarDatoRutina } from '../bibliotecas/biblioteca.js';
import Swal from 'sweetalert2';

const ContextoEntrenamiento = createContext();

const EntrenamientoContexto = ({ children }) => {

  const { entrenamientoContexto, auth } = useAppContext();
  const { usuario } = auth;
  const navigate = useNavigate();
  // Variables iniciales
  const entrenamientosIniciales = [];
  const entrenamientoInicial = {
    nombre: '',
    descripcion: ''
  };
  const errorEntrenamientoInicial = "";
  const apiUrl = `${API_URL}/rutinas`;

  // Estados usando las variables iniciales
  const [entrenamiento, setEntrenamiento] = useState(entrenamientoInicial);
  const [entrenamientos, setEntrenamientos] = useState(entrenamientosIniciales);
  const [entrenamientosFiltrados, setEntrenamientosFiltrados] = useState(entrenamientosIniciales);
  const [errorEntrenamiento, setErrorEntrenamiento] = useState(errorEntrenamientoInicial);
  

  //crud

  const readEntrenamientos = async () => {
    return await fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setEntrenamientosFiltrados(data.rutinas)
      })
      .catch(error => {
        console.error(`Se ha producido un error: ${error.message}`);
        setErrorEntrenamiento(`Se ha producido un error: ${error.message}`);
      });
  }
  useEffect(() => {
    readEntrenamientos();
  }
    , [apiUrl]);

  const createEntrenamiento = async (nuevoEntrenamiento) => {
    await fetch(apiUrl, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(nuevoEntrenamiento),
    })
      .then(response => { return response.json() })
      .then(data => {
        const entrenamientoCreado = data.rutina;
        setEntrenamientos([...entrenamientos, entrenamientoCreado]);
        setEntrenamiento(entrenamientoInicial);
      })
      .catch(error => {
        setErrorEntrenamiento(`Se ha producido un error: ${error.message}`);
      });
  }

  const deleteEntrenamiento = async (id) => {
    // 1. Pregunta de confirmación
    const { isConfirmed } = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      background: '#1A1A1A',     // black1
      color: '#F5F5F5',          // white
      iconColor: '#6320EE',      // purple
      customClass: {
        popup: 'my-swal-popup'
      },
      didOpen: () => {
        const popup = Swal.getPopup();
        popup.style.border = '2px solid #6320EE';      // purple
        popup.style.boxShadow = '0 0 20px #6520ee70';  // purpleOp
      }
    });
  
    if (!isConfirmed) {
      return; // el usuario canceló
    }
  
    // 2. Mostrar loading
    Swal.fire({
      title: 'Eliminando...',
      allowOutsideClick: false,
      didOpen: () => {
                Swal.showLoading();
                const spinner = document.querySelector('.swal2-loader');
                if (spinner) {
                  spinner.style.borderColor = '#6320EE';
                  spinner.style.borderTopColor = 'transparent';
                }
              },
      background: '#1A1A1A',
      color: '#F5F5F5'
    });
  
    // 3. Ejecutar DELETE
    try {
      const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      const data = await response.json();
  
      // Actualizar estado
      setEntrenamientos(prev => prev.filter(e => e.id_rutina !== id));
      setEntrenamientosFiltrados(prev => prev.filter(e => e.id_rutina !== id));
      console.log(`Se ha eliminado el entrenamiento con id: ${id}`);
  
      // 4. Mostrar éxito
      Swal.fire({
        title: "Se ha eliminado correctamente.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        background: '#1A1A1A',
        color: '#F5F5F5'
      });
    } catch (error) {
      // 5. Mostrar error
      Swal.fire({
        title: "Error al eliminar",
        text: error.message,
        icon: "error",
        confirmButtonText: "Cerrar",
        background: '#1A1A1A',
        color: '#F5F5F5'
      });
  
      setErrorEntrenamiento(`Se ha producido un error: ${error.message}`);
    }
  };
  
  const actualizarDatoEntrenamiento = (evento) => {
    const { name, value } = evento.target;
    setEntrenamiento({ ...entrenamiento, [name]: value });
  };


  // Estados locales
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [resultados, setResultados] = useState([])
  const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([])
  const [guardando, setGuardando] = useState(false)

  const almacenarNombre = (e) => {
    setNombre(e.target.value)
  }
  const almacenarDescripcion = (e) => {
    setDescripcion(e.target.value)
  }

  // Crear rutina y ligar ejercicios
  const createEntrentamientoConEjercicios = async () => {
    if (!nombre.trim()) {
      console.warn('Debes indicar un nombre para la rutina')
      return
    }
    if (guardando) {
      return // Previene dobles envíos
    }
    setGuardando(true)
    try {
      // 1) Crear rutina
      let uuid = crypto.randomUUID();
      let uuid_usuario = usuario.id_usuario;

      const resRutina = await fetch('http://localhost:8089/api/rutinas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uuid, uuid_usuario, nombre, descripcion })
      });

      const dataRutina = await resRutina.json()
      const nuevaRutina = dataRutina.rutina || dataRutina

      // 2) Ligado de ejercicios con valores actualizados
      await Promise.all(
        ejerciciosSeleccionados.map(ej =>
          fetch('http://localhost:8089/api/rutina-ejercicio', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id_rutina: nuevaRutina.id_rutina,
              id_ejercicio: ej.id_ejercicio,
              num_series: ej.num_series,
              num_repeticiones: ej.num_repeticiones
            })
          })
        )
      )

      // 3) Refrescar lista y limpiar formulario
      readEntrenamientos()
      setNombre('')
      setDescripcion('')
      setEjerciciosSeleccionados([])
      setResultados([])    
      navigate('/rutina/ejercicio/entrenamientos');
    } catch (error) {
      console.error('Error creando rutina o ligando ejercicios:', error)
    } finally {
      setGuardando(false)
      
    }
  }
  // Selección de ejercicios sin duplicados
  const seleccionEjercicios = (ejercicio) => {
    setEjerciciosSeleccionados(prev =>
      prev.some(e => e.id_ejercicio === ejercicio.id_ejercicio)
        ? prev
        : [...prev, { ...ejercicio, num_series: ejercicio.num_series ?? 3, num_repeticiones: ejercicio.num_repeticiones ?? 10 }]
    )
  }
  // Función para actualizar series/repeticiones en estado
  const actualizarSeriesRepeticionesEstado = (id, field, value) => {
    setEjerciciosSeleccionados(prev =>
      prev.map(ej =>
        ej.id_ejercicio === id
          ? { ...ej, [field]: value }
          : ej
      )
    )
  }

  const eliminarEjercicioSeleccionado = async (id_ejercicio) => {
    const { isConfirmed } = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Este ejercicio será eliminado de la rutina.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      background: '#1A1A1A',
      color: '#F5F5F5',
      iconColor: '#6320EE',
      customClass: {
        popup: 'my-swal-popup'
      },
      didOpen: () => {
        const popup = Swal.getPopup();
        popup.style.border = '2px solid #6320EE';
        popup.style.boxShadow = '0 0 20px #6520ee70';
      }
    });
  
    if (!isConfirmed) return;
  
    setEjerciciosSeleccionados(prev =>
      prev.filter(ej => ej.id_ejercicio !== id_ejercicio)
    );
  };
  

  const [ejerciciosVista, setEjerciciosVista] = useState([]);
  const [rutinaNombre, setRutinaNombre] = useState('');
  const [cargando, setCargando] = useState(true);
  const [errorVistaEntrenamiento, setErrorVistaEntrenamiento] = useState(null);

  const fetchData = async (id, ejercicios) => {
    setRutinaNombre('');
    setEjerciciosVista([]);
    setCargando(true);
    try {
      // 1) Obtener el nombre de la rutina
      const resRut = await fetch(`http://localhost:8089/api/rutinas/${id}`);
      if (!resRut.ok) throw new Error(`Status ${resRut.status}`);
      const rawRut = await resRut.json();
      const rut = rawRut.rutina || rawRut;
      setRutinaNombre(rut.nombre || `Rutina ${id}`);

      // 2) Obtener pivots de rutina-ejercicio
      const res = await fetch('http://localhost:8089/api/rutina-ejercicio');
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const raw = await res.json();
      const pivots = Array.isArray(raw.rutina_ejercicios) ? raw.rutina_ejercicios : [];

      // Filtrar por la rutina actual
      const filtrados = pivots.filter(p => p.id_rutina.toString() === id);

      // Mapear cada pivot con datos de ejercicios ya cargados
      const detalles = filtrados.map(pivot => {
        const ej = ejercicios.find(e => e.id_ejercicio === pivot.id_ejercicio) || {};
        return {
          id_rutina_ejercicio: pivot.id_rutina_ejercicio,
          num_series: pivot.num_series,
          num_repeticiones: pivot.num_repeticiones,
          nombre: ej.nombre,
          descripcion: ej.descripcion,
          grupo_muscular: ej.grupo_muscular,
          imagen_url: ej.imagen_url,
          video_url: ej.video_url
        };
      });

      setEjerciciosVista(detalles);
    } catch (err) {
      console.error('Error cargando datos de la rutina:', err);
      setErrorVistaEntrenamiento('No se pudieron cargar los datos de esta rutina.');
    } finally {
      setCargando(false);
    }
  };

  const validarFormularioEntrenamiento = (evento) => {
    const formulario = evento.target.form;
    const erroresPorCampo = {};
    console.log("Elementos del formulario:", formulario.elements); // Log para ver todos los elementos
  
    for (let i = 0; i < formulario.elements.length; i++) {
      const elemento = formulario.elements[i];
      if (elemento.name) {
        // Log para ver qué elemento se está intentando validar
        console.log(`Intentando validar elemento con name: ${elemento.name}`);
        let erroresElemento = validarDatoRutina(elemento);
        if (erroresElemento.length !== 0) {
          elemento.classList.add("error");
          erroresPorCampo[elemento.name] = erroresElemento;
        } else {
          elemento.classList.remove("error");
        }
      }
    }
    console.log("Errores encontrados:", erroresPorCampo); // Log para ver el resultado final
    setErrorEntrenamiento(erroresPorCampo);
    return Object.keys(erroresPorCampo).length === 0;
  };

  // Función para filtrar los ejercicios por buscador actual.
  const filtrarEntrenamientos = (filtro) => {
    setEntrenamientosFiltrados(entrenamientos);
    const ejerciciosFiltradosReturn =
      misEntrenamientos
        .filter(e =>
          e.nombre
            .toLowerCase()
            .startsWith(filtro.toLowerCase())
        );

    filtro === "" ?
    setEntrenamientosFiltrados(misEntrenamientos) :
    setEntrenamientosFiltrados(ejerciciosFiltradosReturn);
  }

   const rawEntrenamientos = Array.isArray(entrenamientosFiltrados)
      ? entrenamientosFiltrados
      : [];
  
    // 1) Filtrado memoizado: solo se recalcula si cambian rawEntrenamientos o el id de usuario
    const misEntrenamientos = useMemo(
      () => rawEntrenamientos.filter(e => e.uuid_usuario === usuario.id_usuario),
      [rawEntrenamientos, usuario.id_usuario]
    );

  const datosContexto = {
    entrenamiento,
    entrenamientos,
    entrenamientosFiltrados,
    errorEntrenamiento,
    readEntrenamientos,
    createEntrenamiento,
    deleteEntrenamiento,
    createEntrentamientoConEjercicios,
    seleccionEjercicios,
    actualizarSeriesRepeticionesEstado,
    almacenarNombre,
    almacenarDescripcion,
    resultados,
    setResultados,
    nombre,
    descripcion,
    ejerciciosSeleccionados,
    guardando,
    fetchData,
    eliminarEjercicioSeleccionado,
    errorVistaEntrenamiento,
    cargando,
    rutinaNombre,
    ejerciciosVista,
    validarFormularioEntrenamiento,
    filtrarEntrenamientos,
    misEntrenamientos
  };


  return (
    <ContextoEntrenamiento.Provider value={datosContexto}>
      {children}
    </ContextoEntrenamiento.Provider>
  )
}

export default EntrenamientoContexto;
export { ContextoEntrenamiento };

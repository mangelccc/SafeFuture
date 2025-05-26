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
  const [misEntrenamientos, setMisEntrenamientos] = useState([]);
  const [entrenamientosConstantes, setEntrenamientosConstantes] = useState(entrenamientosIniciales);

  

  //crud

  const readEntrenamientos = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      const all = data.rutinas || [];
        // 🔹 1) Deduplicar por nombre+descripción
    const normalizar = str =>
      str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "");
    const vistos = new Set();
    const únicos = all.filter(e => {
      const clave = `${normalizar(e.nombre)}|${normalizar(e.descripcion)}`;
      if (vistos.has(clave)) return false;
      vistos.add(clave);
      return true;
    });

    // 🔹 2) Guardar constantes con únicos
    setEntrenamientosConstantes(únicos);
    setEntrenamientos(únicos);
      const soloUsuario = all.filter(e => e.uuid_usuario === usuario.id_usuario);
      setMisEntrenamientos(soloUsuario);
      setEntrenamientosFiltrados(soloUsuario);
    } catch (err) {
      console.error(err);
      setErrorEntrenamiento(`Error al cargar rutinas: ${err.message}`);
    }
  };
useEffect(() => {
    readEntrenamientos();
  }, [apiUrl]);
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
    const { isConfirmed } = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      background: '#1A1A1A',
      color: '#F5F5F5'
    });
    if (!isConfirmed) return;

    Swal.fire({ title: 'Eliminando...', allowOutsideClick: false, didOpen: Swal.showLoading });
    try {
      await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      setEntrenamientos(prev => prev.filter(e => e.id_rutina !== id));
      setMisEntrenamientos(prev => prev.filter(e => e.id_rutina !== id));
      setEntrenamientosFiltrados(prev => prev.filter(e => e.id_rutina !== id));
      Swal.fire({ title: "Eliminado", icon: "success", timer: 1500, showConfirmButton: false });
      readEntrenamientos(); // Refrescar lista
    } catch (err) {
      Swal.fire("Error", err.message, "error");
      setErrorEntrenamiento(`Error eliminando: ${err.message}`);
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

      const resRutina = await fetch(`${API_URL}/rutinas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uuid, uuid_usuario, nombre, descripcion })
      });

      const dataRutina = await resRutina.json()
      const nuevaRutina = dataRutina.rutina || dataRutina

      // 2) Ligado de ejercicios con valores actualizados
      await Promise.all(
        ejerciciosSeleccionados.map(ej =>
          fetch(`${API_URL}/rutina-ejercicio`, {
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

// ...

const seleccionEjercicios = (ejercicio) => {
  setEjerciciosSeleccionados(prev => {
    if (prev.some(e => e.id_ejercicio === ejercicio.id_ejercicio)) {
      // Ya existe: toast de error
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: `No puedes añadir "${ejercicio.nombre}", ya está seleccionado.`,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      return prev;
    } else {
      // Nuevo: lo añado y muestro éxito
      const nuevo = {
        ...ejercicio,
        num_series: ejercicio.num_series ?? 3,
        num_repeticiones: ejercicio.num_repeticiones ?? 12
      };
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: `Ejercicio "${ejercicio.nombre}" añadido`,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      return [...prev, nuevo];
    }
  });
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
      const resRut = await fetch(`${API_URL}/rutinas/${id}`);
      if (!resRut.ok) throw new Error(`Status ${resRut.status}`);
      const rawRut = await resRut.json();
      const rut = rawRut.rutina || rawRut;
      setRutinaNombre(rut.nombre || `Rutina ${id}`);

      // 2) Obtener pivots de rutina-ejercicio
      const res = await fetch(`${API_URL}/rutina-ejercicio`);
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
          video_url: ej.video_url,
          id_ejercicio: ej.id_ejercicio
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

 const filtrarEntrenamientos = (filtro) => {
  // función de normalización inline
  const normalizar = (str) =>
    str
      .normalize("NFD")                // descompone acentos
      .replace(/[\u0300-\u036f]/g, "") // elimina marcas diacríticas
      .toLowerCase()                   // todo en minúscula
      .replace(/[^a-z0-9 ]/g, "");     // opcional: quita símbolos

  const texto = normalizar(filtro.trim());

  // 1) Si el campo está vacío, recargo todas las rutinas del usuario
  if (texto === "") {
    const todas = entrenamientos.filter(e => e.uuid_usuario === usuario.id_usuario);
    setMisEntrenamientos(todas);
    setEntrenamientosFiltrados(todas);
    return;
  }

  // 2) Si hay texto, filtro sobre la lista completa del usuario
  const baseCompleta = entrenamientos.filter(e => e.uuid_usuario === usuario.id_usuario);
  const resultado = baseCompleta.filter(e =>
    normalizar(e.nombre).startsWith(texto)
  );

  setMisEntrenamientos(resultado);
  setEntrenamientosFiltrados(resultado);
};

const filtrarEntrenamientosGlobal = (filtro) => {
  // función de normalización inline
  const normalizar = (str) =>
    str
      .normalize("NFD")                // descompone acentos
      .replace(/[\u0300-\u036f]/g, "") // elimina marcas diacríticas
      .toLowerCase()                   // todo en minúscula
      .replace(/[^a-z0-9 ]/g, "");     // quita símbolos

  const texto = normalizar(filtro.trim());

  // 1) Si el campo está vacío, uso todas las constantes sin startsWith
  // 2) Si hay texto, filtro por startsWith sobre el array dinámico
  const base = texto === ""
    ? entrenamientosConstantes
    : entrenamientos.filter(e =>
        normalizar(e.nombre).startsWith(texto)
      );

  // Elimino duplicados por nombre+descripción en la lista base
  const vistos = new Set();
  const únicos = base.filter(e => {
    const clave = `${normalizar(e.nombre)}|${normalizar(e.descripcion)}`;
    if (vistos.has(clave)) return false;
    vistos.add(clave);
    return true;
  });

  setEntrenamientos(únicos);
};



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
    misEntrenamientos,
    filtrarEntrenamientosGlobal
  };


  return (
    <ContextoEntrenamiento.Provider value={datosContexto}>
      {children}
    </ContextoEntrenamiento.Provider>
  )
}

export default EntrenamientoContexto;
export { ContextoEntrenamiento };

import React, { createContext, useEffect, useState } from 'react';
import { API_URL } from "../bibliotecas/config.js";

const ContextoEntrenamiento = createContext();

const EntrenamientoContexto = ({ children }) => {

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
        setEntrenamientos(data.rutinas);
        setEntrenamientosFiltrados(data.rutinas)
      })
      .catch(error => {
        console.error(`Se ha producido un error: ${error.message}`);
        setErrorEntrenamiento(`Se ha producido un error: ${error.message}`);
      });
  }
  useEffect(() => {
    readEntrenamientos(apiUrl);
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
    await fetch(`${apiUrl}/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        setEntrenamientos(entrenamientos.filter(e => e.id_rutina !== id));
        setEntrenamientosFiltrados(entrenamientos.filter(e => e.id_rutina !== id));
        console.log(`Se ha eliminado el entrenamiento con id: ${id}`);
      })
      .catch(error => {
        setErrorEntrenamiento(`Se ha producido un error: ${error.message}`);
      });
  }
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
      const resRutina = await fetch('http://localhost:8089/api/rutinas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, descripcion })
      })
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
      console.log('Rutina creada y ejercicios ligados correctamente')

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
    guardando
  };


  return (
    <ContextoEntrenamiento.Provider value={datosContexto}>
      {children}
    </ContextoEntrenamiento.Provider>
  )
}

export default EntrenamientoContexto;
export { ContextoEntrenamiento };

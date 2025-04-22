import React, { useState, useContext } from 'react'
import Ejercicio from './Ejercicio'
import { SearchBar } from './buscador/SearchBar'
import { SearchResultsList } from './buscador/SearchResultsList'
import { ContextoEntrenamiento } from '../../../contextos/EntrenamientoContexto.jsx'

const FormularioEntrenamiento = () => {
  // Obtener funciones del contexto de entrenamiento
  const { readEntrenamientos } = useContext(ContextoEntrenamiento)

  // Estados locales
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [results, setResults] = useState([])
  const [selectedEjercicios, setSelectedEjercicios] = useState([])

  // Seleccionar ejercicios sin duplicados
  const handleSelect = (ejercicio) => {
    setSelectedEjercicios(prev =>
      prev.some(e => e.id_ejercicio === ejercicio.id_ejercicio)
        ? prev
        : [...prev, ejercicio]
    )
  }

  // Crear rutina y ligar ejercicios
  const handleCreateRutina = async () => {
    if (!nombre.trim()) {
      console.warn('Debes indicar un nombre para la rutina')
      return
    }
    try {
      // 1) POST -> /api/rutinas
      const respuestaRutina = await fetch('http://localhost:8089/api/rutinas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, descripcion })
      })
      const datoRutina = await respuestaRutina.json()
      const nuevaRutina = datoRutina.rutina || datoRutina

      // 2) POST -> /api/rutina-ejercicio por cada ejercicio
      await Promise.all(
        selectedEjercicios.map(ej =>
          fetch('http://localhost:8089/api/rutina-ejercicio', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id_rutina: nuevaRutina.id_rutina,
              id_ejercicio: ej.id_ejercicio,
              num_series: ej.num_series ?? 3,
              num_repeticiones: ej.num_repeticiones ?? 10
            })
          })
        )
      )

      // 3) Refrescar y limpiar
      readEntrenamientos()
      setNombre('')
      setDescripcion('')
      setSelectedEjercicios([])
      setResults([])
      console.log('Rutina creada y ejercicios ligados exitosamente')

    } catch (error) {
      console.error('Error creando rutina o ligando ejercicios:', error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-black rounded-lg shadow-md">
      <form onSubmit={e => e.preventDefault()} className="space-y-6">
        {/* Nombre Rutina */}
        <div>
          <label htmlFor="nombre" className="block mb-1 font-medium text-black dark:text-white">
            Nombre de la Rutina:
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre de la rutina"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            className="w-full rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple dark:focus:ring-gold transition"
          />
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="descripcion" className="block mb-1 font-medium text-black dark:text-white">
            Descripción:
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripción de la rutina"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            className="w-full rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple dark:focus:ring-gold transition"
          />
        </div>

        {/* Buscador y Selección */}
        <div className="flex gap-4">
          <div className="w-2/5">
            <SearchBar setResults={setResults} />
            {results.length > 0 && <SearchResultsList results={results} onSelect={handleSelect} />}
          </div>
          <div className="w-3/5 border border-gray-300 rounded-lg p-4 max-h-[360px] overflow-auto">
            <h2 className="font-semibold mb-2">Ejercicios Seleccionados:</h2>
            {selectedEjercicios.map(ej => (
              <Ejercicio
                key={ej.id_ejercicio}
                nombre={ej.nombre}
                descripcion={ej.descripcion}
                grupoMuscular={ej.grupo_muscular}
                imagen={ej.imagen_url}
                video={ej.video_url}
              />
            ))}
          </div>
        </div>

        {/* Botón sin recarga */}
        <button
          type="button"
          onClick={handleCreateRutina}
          className="w-full bg-purple dark:bg-gold text-white font-bold py-2 rounded hover:scale-105 transition-transform duration-300"
        >
          Crear Rutina y Ligar Ejercicios
        </button>
      </form>
    </div>
  )
}

export default FormularioEntrenamiento

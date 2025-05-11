import React from 'react'
import Ejercicio from './Ejercicio'
import { SearchBar } from './buscador/SearchBar'
import { SearchResultsList } from './buscador/SearchResultsList'
import useAppContext from "../../../hooks/useAppContext.jsx"

const FormularioEntrenamiento = () => {
  // Contexto de entrenamiento
  const { entrenamientoContexto,auth } = useAppContext();
  const { 
          readEntrenamientos, 
          createEntrentamientoConEjercicios, 
          seleccionEjercicios, 
          actualizarSeriesRepeticionesEstado, 
          almacenarNombre,
          almacenarDescripcion,
          nombre,
          descripcion,
          resultados,
          setResultados,
          ejerciciosSeleccionados,
          guardando
        } = entrenamientoContexto

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-black rounded-lg shadow-md">
      <form onSubmit={e => e.preventDefault()} className="space-y-6">
        {/* Nombre de la Rutina */}
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
            onChange={e => almacenarNombre(e)}
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
            onChange={e => almacenarDescripcion(e)}
            className="w-full rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple dark:focus:ring-gold transition"
          />
        </div>

        {/* Buscador y Ejercicios Seleccionados */}
        <div className="flex gap-4">
          <div className="w-2/5">
            <SearchBar setResults={setResultados} />
            {resultados.length > 0 && <SearchResultsList results={resultados} onSelect={seleccionEjercicios} />}
          </div>
          <div className="w-3/5 border border-gray-300 rounded-lg p-4 max-h-[360px] overflow-auto">
            <h2 className="font-semibold mb-2">Ejercicios Seleccionados:</h2>
            {ejerciciosSeleccionados.map(ej => (
              <Ejercicio
                key={ej.id_ejercicio}
                nombre={ej.nombre}
                descripcion={ej.descripcion}
                grupoMuscular={ej.grupo_muscular}
                imagen={ej.imagen_url}
                video={ej.video_url}
                series={ej.num_series}
                repeticiones={ej.num_repeticiones}
                showSeriesEdit={true}
                onChangeSeries={val => actualizarSeriesRepeticionesEstado(ej.id_ejercicio, 'num_series', val)}
                onChangeRepeticiones={val => actualizarSeriesRepeticionesEstado(ej.id_ejercicio, 'num_repeticiones', val)}
              />
            ))}
          </div>
        </div>

        {/* Botón crear sin recarga, deshabilitado si está guardando */}
        <button
          type="button"
          onClick={createEntrentamientoConEjercicios}
          disabled={guardando}
          className={`w-full py-2 font-bold rounded transition-transform duration-300 ${guardando ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-purple text-white hover:scale-105 dark:bg-gold dark:text-black'}`}
        >
          {guardando ? 'Guardando...' : 'Crear Rutina y Ligar Ejercicios'}
        </button>
      </form>
    </div>
  )
}

export default FormularioEntrenamiento

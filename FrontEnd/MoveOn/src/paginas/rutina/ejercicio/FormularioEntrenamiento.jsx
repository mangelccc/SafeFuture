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
    <div className="p-6">
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
            className="rounded bg-white dark:bg-black px-2 border-2
                    border-black p-2 outline-none focus:border-purple transition duration-300"
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
            className=" w-1/2 h-[100px] rounded bg-white dark:bg-black px-2 border-2
                    border-black p-2 outline-none focus:border-purple transition duration-300"
          />
        </div>
        <h2 className='text-black dark:text-white'><b>Elige Ejercicios:</b></h2>
        {/* Buscador y Ejercicios Seleccionados */}
        <div className="flex hsm:flex-row sm:flex-col gap-4">
          <div className="hsm:w-1/5 sm:w-full">
            <SearchBar setResults={setResultados} />
            {resultados.length > 0 && <SearchResultsList results={resultados} onSelect={seleccionEjercicios} />}
          </div>
          <div className="flex flex-wrap w-full border border-gray-300 rounded-lg p-4 max-h-[360px] overflow-auto">
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
          className={` p-3 font-bold rounded transition-transform duration-300 ${guardando ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-purple text-white hover:scale-105 dark:bg-gold dark:text-black'}`}
        >
          {guardando ? 'Guardando...' : 'Crear Rutina Ejercicios'}
        </button>
      </form>
    </div>
  )
}

export default FormularioEntrenamiento

import { useEffect, useState } from 'react';
import Ejercicio from './Ejercicio';
import { SearchBar } from './buscador/SearchBar';
import { SearchResultsList } from './buscador/SearchResultsList';
import useAppContext from "../../../hooks/useAppContext.jsx";
import Swal from 'sweetalert2';

// Hook para media queries
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    setMatches(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

const FormularioEntrenamiento = () => {
  // Contexto de entrenamiento
  const { entrenamientoContexto, ejerciciosContex } = useAppContext();
  const {
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
    guardando,
    eliminarEjercicioSeleccionado,
  } = entrenamientoContexto;

  // Contexto de todos los ejercicios
  const { ejercicios, readEjercicios } = ejerciciosContex;

  // Detectamos si estamos en desktop (>=768px)
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Validación antes de crear rutina...
  const validarFormularioEntrenamiento = () => {
    const errores = [];
    if (!nombre.trim()) errores.push('El nombre de la rutina es obligatorio.');
    if (!descripcion.trim()) errores.push('La descripción es obligatoria.');
    if (ejerciciosSeleccionados.length === 0) errores.push('Debes seleccionar al menos un ejercicio.');
    return errores;
  };

  const handleCreate = () => {
    const errores = validarFormularioEntrenamiento();
    if (errores.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Errores en el formulario',
        html: `
          <div style="text-align: left; padding-left: 55px; line-height: 1.5;">
            ${errores.map(e => `❌ ${e}`).join('<br/>')}
          </div>
        `,
        background: '#1A1A1A',
        color: '#F5F5F5',
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonAriaLabel: 'Cerrar',
        customClass: { closeButton: 'swal2-close--custom' }
      });
      return;
    }
    createEntrentamientoConEjercicios();
  };

  // Carga ejercicios una sola vez
  useEffect(() => {
    readEjercicios();
  }, []);

  // Cada vez que cambian 'ejercicios' o el breakpoint,
  // inicializamos resultados: todos en desktop, vacíos en móvil
  useEffect(() => {
    if (isDesktop) {
      setResultados(ejercicios);
    } else {
      setResultados([]);
    }
  }, [ejercicios, isDesktop]);

  // Feedback de guardado
  useEffect(() => {
    if (guardando) {
      Swal.fire({
        title: 'Guardando rutina...',
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
    } else {
      Swal.close();
    }
  }, [guardando]);

  return (
    <div className="p-6">
      <form onSubmit={e => e.preventDefault()} className="space-y-6">
        {/* Campos de nombre y descripción */}
        <div className='sm:flex gap-4'>
          {/* Nombre */}
          <div className='flex-1'>
            <label htmlFor="nombre" className="block mb-1 font-medium text-black dark:text-white">
              Nombre de la Rutina:
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre de la rutina"
              value={nombre}
              onChange={almacenarNombre}
              className="w-full rounded bg-white dark:bg-black border-2 border-black p-2 focus:border-purple outline-none transition dark:text-white"
            />
          </div>
          {/* Descripción */}
          <div className='flex-1'>
            <label htmlFor="descripcion" className="block mb-1 font-medium text-black dark:text-white">
              Descripción:
            </label>
            <textarea
              id="descripcion"
              placeholder="Descripción de la rutina"
              value={descripcion}
              onChange={almacenarDescripcion}
              className="w-full rounded bg-white dark:bg-black border-2 border-black p-2 focus:border-purple outline-none transition dark:text-white"
            />
          </div>
        </div>

        {/* Buscador y lista de resultados */}
        <h2 className='text-black dark:text-white font-semibold'>Elige Ejercicios:</h2>
        <div className="flex sm:flex-row hsm:flex-col gap-4">
          <div className="w-full">
            <SearchBar setResults={setResultados} />

            {isDesktop ? (
              // En desktop siempre mostramos la lista
              <SearchResultsList
                results={resultados}
                onSelect={seleccionEjercicios}
              />
            ) : (
              // En móvil solo si resultados.length > 0
              resultados.length > 0 && (
                <SearchResultsList
                  results={resultados}
                  onSelect={seleccionEjercicios}
                />
              )
            )}
          </div>


          {/* Selección actual */}
          <div className="flex flex-wrap w-full border border-gray-300 rounded-lg p-4 h-[500px] overflow-auto">
            {ejerciciosSeleccionados.length > 0
              ? ejerciciosSeleccionados.map(ej => (
                <Ejercicio
                  key={ej.id_ejercicio}
                  {...ej}
                  showSeriesEdit={true}
                  onChangeSeries={val => actualizarSeriesRepeticionesEstado(ej.id_ejercicio, 'num_series', val)}
                  onChangeRepeticiones={val => actualizarSeriesRepeticionesEstado(ej.id_ejercicio, 'num_repeticiones', val)}
                  onClick={() => eliminarEjercicioSeleccionado(ej.id_ejercicio)}
                />
              ))
              : (
                <p className="w-full text-center text-gray-500 dark:text-gray-400">
                  No hay ejercicios seleccionados
                </p>
              )
            }
          </div>
        </div>

        {/* Botón crear */}
        <button
          type="button"
          onClick={handleCreate}
          disabled={guardando}
          className={`
              sm:w-1/4 hsm:w-full p-3 font-bold rounded 
              transition-colors duration-300 ease-in-out 
              
              ${guardando
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-purple text-white hover:bg-turq dark:bg-gold dark:hover:bg-turq dark:text-black'
            }
            `}
        >
          {guardando ? 'Guardando...' : 'Crear Rutina Ejercicios'}
        </button>
      </form>
    </div>
  );
};

export default FormularioEntrenamiento;

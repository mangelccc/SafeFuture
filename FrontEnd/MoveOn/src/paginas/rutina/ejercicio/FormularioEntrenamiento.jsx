import { useEffect } from 'react'
import Ejercicio from './Ejercicio'
import { SearchBar } from './buscador/SearchBar'
import { SearchResultsList } from './buscador/SearchResultsList'
import useAppContext from "../../../hooks/useAppContext.jsx"
import Swal from 'sweetalert2';

const FormularioEntrenamiento = () => {
  // Contexto de entrenamiento
  const { entrenamientoContexto, auth } = useAppContext();
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
    guardando,
    eliminarEjercicioSeleccionado,
  } = entrenamientoContexto

  // Dentro de entrenamientoContexto (antes de return)

const validarFormularioEntrenamiento = () => {
  const errores = [];
  if (!nombre.trim()) errores.push('El nombre de la rutina es obligatorio.');
  if (!descripcion.trim()) errores.push('La descripción es obligatoria.');
  if (ejerciciosSeleccionados.length === 0) errores.push('Debes seleccionar al menos un ejercicio.');
  return errores;
};
// Nuevo handler que valida antes de crear
 const handleCreate = () => {
     const errores = validarFormularioEntrenamiento();
     if (errores.length > 0) {
       // Muestro todos los errores en un solo alert
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
      
        // Aquí van las claves para mostrar solo la X de cierre:
        showConfirmButton: false,    // oculta el botón OK
        showCloseButton: true,       // muestra la X arriba a la derecha
        closeButtonAriaLabel: 'Cerrar',  // accesibilidad
        // si quieres personalizar aún más la X, puedes usar:
        // closeButtonHtml: '<span style="font-size:1.25em;">✖️</span>',
      
        // opcional: ajusta la posición de la X vía clases CSS
        customClass: {
          closeButton: 'swal2-close--custom'
        }
      });
      
      
      
       return;
     }

   createEntrentamientoConEjercicios();
  };


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
        {/* Nombre de la Rutina */}
        <div className='sm:flex'>
          <div className='flex-1'>
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
              className="hsm:w-full rounded bg-white dark:bg-black px-2 border-2
                    border-black p-2 outline-none focus:border-purple transition duration-300"
            />
          </div>

          {/* Descripción */}
          <div className='flex-1'>
            <label htmlFor="descripcion" className="block mb-1 font-medium text-black dark:text-white">
              Descripción:
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="Descripción de la rutina"
              value={descripcion}
              onChange={e => almacenarDescripcion(e)}
              className="w-full rounded bg-white dark:bg-black px-2 border-2
                    border-black p-2 outline-none focus:border-purple transition duration-300"
            />
          </div>
        </div>
        <h2 className='text-black dark:text-white'><b>Elige Ejercicios:</b></h2>
        {/* Buscador y Ejercicios Seleccionados */}
        <div className="flex sm:flex-row hsm:flex-col gap-4 ">
          <div className="w-full">
            <SearchBar setResults={setResultados} />
            {resultados.length > 0 && <SearchResultsList results={resultados} onSelect={seleccionEjercicios} />}
          </div>
          <div className="flex flex-wrap w-full border border-gray-300 rounded-lg p-4 h-[500px] overflow-auto">
            {ejerciciosSeleccionados.length > 0 ? (
              ejerciciosSeleccionados.map(ej => (
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
                  onClick={() => eliminarEjercicioSeleccionado(ej.id_ejercicio)}
                />
              ))
            ) : (
              <p className="w-full text-center text-gray-500 dark:text-gray-400">
                No hay ejercicios seleccionados
              </p>
            )}
          </div>

        </div>

        {/* Botón crear sin recarga, deshabilitado si está guardando */}
        <button
          type="button"
          onClick={handleCreate}
          disabled={guardando}
          className={`hsm:w-full p-3 font-bold rounded transition-transform duration-300 ${guardando ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-purple text-white hover:scale-105 dark:bg-gold dark:text-black'}`}
        >
          {guardando ? 'Guardando...' : 'Crear Rutina Ejercicios'}
        </button>
      </form>
    </div>
  )
}

export default FormularioEntrenamiento

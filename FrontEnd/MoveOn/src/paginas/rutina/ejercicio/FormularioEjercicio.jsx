

//
import React, { useState } from 'react';
import useAppContext from '../../../hooks/useAppContext.jsx';
import { X } from 'lucide-react';

const FormularioEjercicio = () => {
  const { ejerciciosContex } = useAppContext();
  const {
    actualizarDato,
    ejercicio,
    validarFormularioEjercicio,
    errorEjercicio,
    createEjercicio
  } = ejerciciosContex;

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();                   // cancelar el submit nativo
    if (!validarFormularioEjercicio(e)) { // le pasamos el event
      return;
    }
    try {
      await createEjercicio(ejercicio);
      setIsOpen(false);
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple dark:bg-gold text-white2 dark:text-black font-bold px-3 
                    py-1 rounded hover:outline dark:hover:outline-3 outline-gold dark:outline-purple">
        +
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-black rounded-2xl shadow-xl w-full max-w-3xl p-6 relative">
            {/* Cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <X size={20} />
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Crear Nuevo Ejercicio
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block mb-1 font-medium text-black dark:text-white">
            Nombre:
          </label>
          <input
            name="nombre"
            type="text"
            placeholder="Escribe tu nombre."
            value={ejercicio.nombre}
            onChange={actualizarDato}
            className="w-full rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black outline-none focus:ring-2 focus:ring-purple dark:focus:ring-gold transition duration-300"
          />
          {errorEjercicio.nombre && (
            <p className="text-sm text-red-500 mt-1">{errorEjercicio.nombre}</p>
          )}
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="descripcion" className="block mb-1 font-medium text-black dark:text-white">
            Descripción:
          </label>
          <input
            name="descripcion"
            type="text"
            placeholder="Escribe la descripción."
            value={ejercicio.descripcion}
            onChange={actualizarDato}
            className="w-full rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black outline-none focus:ring-2 focus:ring-purple dark:focus:ring-gold transition duration-300"
          />
          {errorEjercicio.descripcion && (
            <p className="text-sm text-red-500 mt-1">{errorEjercicio.descripcion}</p>
          )}
        </div>

        {/* Imagen URL */}
        <div>
          <label htmlFor="imagen_url" className="block mb-1 font-medium text-black dark:text-white">
            Imagen URL:
          </label>
          <input
            name="imagen_url"
            type="url"
            placeholder="Escribe el URL de la imagen."
            value={ejercicio.imagen_url}
            onChange={actualizarDato}
            className="w-full rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black outline-none focus:ring-2 focus:ring-purple dark:focus:ring-gold transition duration-300"
          />
          {errorEjercicio.imagen_url && (
            <p className="text-sm text-red-500 mt-1">{errorEjercicio.imagen_url}</p>
          )}
        </div>

        {/* Video URL */}
        <div>
          <label htmlFor="video_url" className="block mb-1 font-medium text-black dark:text-white">
            Video URL:
          </label>
          <input
            name="video_url"
            type="url"
            placeholder="Escribe el URL del video."
            value={ejercicio.video_url}
            onChange={actualizarDato}
            className="w-full rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black outline-none focus:ring-2 focus:ring-purple dark:focus:ring-gold transition duration-300"
          />
          {errorEjercicio.video_url && (
            <p className="text-sm text-red-500 mt-1">{errorEjercicio.video_url}</p>
          )}
        </div>

        {/* Grupo Muscular */}
        <div>
          <label htmlFor="grupo_muscular" className="block mb-1 font-medium text-black dark:text-white">
            Grupo Muscular:
          </label>
          <select
            name="grupo_muscular"
            value={ejercicio.grupo_muscular}
            onChange={actualizarDato}
            className="w-full rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black outline-none focus:ring-2 focus:ring-purple dark:focus:ring-gold transition duration-300"
          >
            <option value="" disabled>No seleccionado</option>
            <option value="pecho">Pecho</option>
            <option value="espalda">Espalda</option>
            <option value="hombros">Hombros</option>
            <option value="brazos">Brazos</option>
            <option value="piernas">Piernas</option>
            <option value="gluteos">Glúteos</option>
            <option value="abdomen">Abdomen</option>
            <option value="fullbody">Cuerpo completo</option>
            <option value="cardio">Cardio</option>
            <option value="movilidad">Movilidad / Flexibilidad</option>
          </select>
          {errorEjercicio.grupo_muscular && (
            <p className="text-sm text-red-500 mt-1">{errorEjercicio.grupo_muscular}</p>
          )}
        </div>

        {/* Botón de envío */}
        <div>
          <input
            type="button"
            value="Enviar datos"
            onClick={handleSubmit}
            className="w-full bg-purple dark:bg-gold text-white dark:text-black font-bold py-2 rounded hover:scale-105 transition-transform duration-300"
          />
        </div>
      </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormularioEjercicio;

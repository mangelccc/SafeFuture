import React from 'react'
import useAppContext from "../../../hooks/useAppContext.jsx";

const FormularioEjercicio = () => {
  const { ejerciciosContex } = useAppContext();
  const { actualizarDato, ejercicio, validarFormularioEjercicio,errorEjercicio } = ejerciciosContex;

  return (
    <div className="max-w-3xl w-full mx-auto p-6 bg-white dark:bg-black rounded-lg shadow-md">
      <form className="space-y-4">
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
        </div>

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
        </div>

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
        </div>

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
        </div>

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
        </div>
        <p>{errorEjercicio}</p>
        <div>
          <input
            type="button"
            value="Enviar datos"
            onClick={(evento) => {
              if (validarFormularioEjercicio(evento)) {
                console.log(ejercicio);
                createEjercicio(ejercicio);
              }
            }}
            className="w-full bg-purple dark:bg-gold text-white dark:text-black font-bold py-2 rounded hover:scale-105 transition-transform duration-300"
          />
        </div>
      </form>
    </div>
  );
};

export default FormularioEjercicio;

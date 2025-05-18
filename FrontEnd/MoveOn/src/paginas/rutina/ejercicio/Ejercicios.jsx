import React, { useState } from "react";
import useAppContext from "../../../hooks/useAppContext.jsx";
import Ejercicio from "./Ejercicio.jsx";

const Ejercicios = () => {
  const { ejerciciosContex } = useAppContext();
  const { ejerciciosFiltrados } = ejerciciosContex;

  const ejerciciosPorPagina = 100;
  const totalPaginas = Math.ceil(ejerciciosFiltrados.length / ejerciciosPorPagina);

  const [paginaActual, setPaginaActual] = useState(1);
  const [maxMostrar, setMaxMostrar] = useState(4); // cuántos botones numerados mostrar antes del “…”

  const indiceInicio = (paginaActual - 1) * ejerciciosPorPagina;
  const indiceFinal = indiceInicio + ejerciciosPorPagina;
  const ejerciciosPaginados = ejerciciosFiltrados.slice(indiceInicio, indiceFinal);

  const cambiarPagina = (num) => setPaginaActual(num);

  const aumentarRango = () => {
    setMaxMostrar((prev) => Math.min(prev + 4, totalPaginas - 1));
  };

  // Genera array de páginas a renderizar antes del “…”
  const paginasVisibles = Array.from({ length: Math.min(maxMostrar, totalPaginas - 1) }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-4">
      {/* Contenedor de ejercicios */}
      <div className="flex flex-wrap justify-center items-center gap-4 h-[600px] overflow-y-scroll border-2 border-black dark:border-white rounded">
        {ejerciciosPaginados.length > 0 ? (
          ejerciciosPaginados.map((ejercicio) => (
            <Ejercicio
              key={ejercicio.id_ejercicio}
              nombre={ejercicio.nombre}
              descripcion={ejercicio.descripcion}
              imagen={ejercicio.imagen_url}
              video={ejercicio.video_url}
              grupoMuscular={ejercicio.grupo_muscular}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No hay ejercicios.</p>
        )}
      </div>

      {/* Paginación */}
      <div className="flex justify-center gap-2 flex-wrap items-center">
        {/* Botón “Anterior” */}
        <button
          onClick={() => paginaActual > 1 && cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
        >
          ←
        </button>

        {/* Primeros botones numerados */}
        {paginasVisibles.map((num) => (
          <button
            key={num}
            onClick={() => cambiarPagina(num)}
            className={`px-4 py-2 rounded ${
              paginaActual === num
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
            }`}
          >
            {num}
          </button>
        ))}

        {/* “…” expandible */}
        {maxMostrar < totalPaginas - 1 && (
          <button
            onClick={aumentarRango}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          >
            ...
          </button>
        )}

        {/* Última página, si no está ya en el rango */}
        {totalPaginas > 1 && maxMostrar < totalPaginas && (
          <button
            onClick={() => cambiarPagina(totalPaginas)}
            className={`px-4 py-2 rounded ${
              paginaActual === totalPaginas
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
            }`}
          >
            {totalPaginas}
          </button>
        )}

        {/* Botón “Siguiente” */}
        <button
          onClick={() => paginaActual < totalPaginas && cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Ejercicios;

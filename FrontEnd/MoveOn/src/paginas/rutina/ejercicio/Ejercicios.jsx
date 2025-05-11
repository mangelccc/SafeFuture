import React from "react";
import useAppContext from "../../../hooks/useAppContext.jsx";
import Ejercicio from "./Ejercicio.jsx";

const Ejercicios = () => {
  const { ejerciciosContex } = useAppContext();
  const { ejerciciosFiltrados } = ejerciciosContex;

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 h-[600px] overflow-y-scroll border-2 border-black dark:border-white rounded">
      {ejerciciosFiltrados.length > 0 ? (
        ejerciciosFiltrados.map((ejercicio) => (
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
  );
};

export default Ejercicios;

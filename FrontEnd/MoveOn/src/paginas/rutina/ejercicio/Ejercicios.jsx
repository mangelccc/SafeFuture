import React from "react";
import useAppContext from "../../../hooks/useAppContext.jsx";
import Ejercicio from "./Ejercicio.jsx";

const Ejercicios = () => {
  const { ejerciciosContex } = useAppContext();
  const { ejercicios } = ejerciciosContex;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[500px] overflow-y-scroll">
      {ejercicios.length > 0 ? (
        ejercicios.map((ejercicio) => (
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

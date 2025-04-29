import React from 'react';

const Ejercicio = ({
  nombre,
  descripcion,
  grupoMuscular,
  imagen,
  video,
  series,
  repeticiones,
  showSeries = false
}) => {
  return (
    <div className="ejercicio border-2 rounded-lg m-5 border-black dark:border-gold w-[300px] h-[340px] p-3 flex flex-col bg-white dark:bg-purple dark:text-gold transition-all duration-300 transform hover:scale-105">
      <p><strong>Nombre:</strong> {nombre}</p>
      {/*<p><strong>Descripción:</strong> {descripcion}</p>*/}
      <p><strong>Grupo Muscular:</strong> {grupoMuscular}</p>
      
      <div className="flex justify-center mt-2">
        <video
          poster={imagen}
          src={video}
          className="w-[200px] h-[200px] object-cover rounded-lg border-2 dark:border-gold"
        />
      </div>

      {showSeries && (
        <div className="mt-2 text-center">
          <p><strong>Series:</strong> {series}</p>
          <p><strong>Repeticiones:</strong> {repeticiones}</p>
        </div>
      )}
    </div>
  );
};

export default Ejercicio;

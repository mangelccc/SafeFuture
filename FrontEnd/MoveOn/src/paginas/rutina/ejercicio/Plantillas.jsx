import React from 'react';
import Entrenamiento from './Entrenamiento.jsx';
import useAppContext from "../../../hooks/useAppContext.jsx";

const Plantillas = () => {
  const { entrenamientoContexto } = useAppContext();
  const { entrenamientosFiltrados } = entrenamientoContexto;
  return (
    <div className='p-6'>
      <h2 className='dark:text-white mb-8'>
        <strong>Plantillas entrenamientos</strong>
      </h2>
      <div className='w-full gap-4 h-[600px] overflow-y-scroll border-2 border-black dark:border-white rounded'>
      {entrenamientosFiltrados.length > 0 ? (
        entrenamientosFiltrados.map(ent => (
          <Entrenamiento
            key={ent.id_rutina}
            entrenamiento={ent}
            esPlantilla={true}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No hay entrenamientos.
        </p>
      )}
      </div>
    </div>
  );
};

export default Plantillas;

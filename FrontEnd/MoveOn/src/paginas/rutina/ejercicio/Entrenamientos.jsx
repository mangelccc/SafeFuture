import React, { useMemo } from 'react';
import Entrenamiento from './Entrenamiento.jsx';
import useAppContext from "../../../hooks/useAppContext.jsx";

const Entrenamientos = () => {
  const { entrenamientoContexto, } = useAppContext();
  const { misEntrenamientos,deleteEntrenamiento } = entrenamientoContexto;

  return (
    <div>
      <div className='gap-4 h-[600px] overflow-y-scroll border-2 border-black dark:border-white rounded'>
      {misEntrenamientos.length > 0 ? (
        misEntrenamientos.map(ent => (
          <Entrenamiento
            key={ent.id_rutina}
            entrenamiento={ent}
            deleteEntrenamiento={deleteEntrenamiento}
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

export default Entrenamientos;

import React from 'react';
import Entrenamiento from './Entrenamiento.jsx';
import useAppContext from "../../../hooks/useAppContext.jsx";

const Plantillas = () => {
  const { entrenamientoContexto } = useAppContext();
  const { entrenamientos,filtrarEntrenamientosGlobal } = entrenamientoContexto;
  return (
    <div className='p-6'>
      <h2 className='dark:text-white mb-2'>
        <strong>Plantillas entrenamientos</strong>
      </h2>
      <div className='flex flex-row w-full space-x-4 justify-between items-center mb-4'>
                <input
                    type="text"
                    placeholder="Filtrar por nombre"
                    className="rounded bg-white dark:bg-black px-2 border-2
                    border-black p-2 outline-none focus:border-purple transition duration-300 dark:text-white"
                    onChange={(e) => filtrarEntrenamientosGlobal(e.target.value)}
                />
            </div>
      <div className='w-full gap-4 h-[600px] overflow-y-scroll sm:border-2 border-black dark:border-white rounded'>
      {entrenamientos.length > 0 ? (
        entrenamientos.map(ent => (
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

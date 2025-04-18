import React from 'react';
import useAppContext from '../../../hooks/useAppContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Entrenamiento = ({ entrenamiento }) => {
  const { entrenamientoContexto } = useAppContext();
  const { deleteEntrenamiento } = entrenamientoContexto;
  return (
    <div key={entrenamiento.id_rutina} className='entrenamiento border-2 rounded-lg m-5 border-black dark:border-white p-2 flex flex-row justify-between w-full hover:bg-purple hover:scale-102 hover:text-gold transition-all duration-300 ease-in-out'>
      <div className='flex flex-col align-center justify-center w-full'>
        <p><strong>Nombre: </strong>{entrenamiento.nombre}</p>
        <p><strong>Descripción: </strong>{entrenamiento.descripcion}</p>
      </div>
      <div className='botones-edit-rem flex flex-row items-center justify-center gap-4 w-full'>
        <FontAwesomeIcon icon={faTrash} size='2x' className='cursor-pointer' onClick={(e) => {
          deleteEntrenamiento(entrenamiento.id_rutina); 
          e.preventDefault();
          }}/>
        <FontAwesomeIcon icon={faPenToSquare} size='2x' className='cursor-pointer'onClick={(e) => {}}/>
      </div>
      <div className='boton-info flex flex-row items-center justify-center gap-2 pr-2'>
        <FontAwesomeIcon icon={faAngleRight} size='2x' className='cursor-pointer'/>
      </div>
    </div>
  );
};

export default Entrenamiento;

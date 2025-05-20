import React from 'react';
import useAppContext from '../../../hooks/useAppContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPenToSquare,
  faAngleRight,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Entrenamiento = ({ entrenamiento, deleteEntrenamiento, esPlantilla = false }) => {
  const navigate = useNavigate();

  return (
    <div
      key={entrenamiento.id_rutina}
      className="entrenamiento border-2 rounded-lg m-5 dark:text-white border-black dark:border-white p-2 flex justify-between items-center hover:bg-purple hover:scale-102 hover:text-gold transition-all duration-300"
    >
      <div className="flex-1">
        <p><strong>Nombre:</strong> {entrenamiento.nombre}</p>
        <p><strong>Descripción:</strong> {entrenamiento.descripcion}</p>
      </div>

      <div className="flex items-center gap-4">
        {esPlantilla ? (
          <FontAwesomeIcon
            icon={faPlus}
            size="2x"
            className="cursor-pointer"
            onClick={() => console.log("Agregar plantilla:", entrenamiento)}
          />
        ) : (
          <>
            <FontAwesomeIcon
              icon={faTrash}
              size="2x"
              className="cursor-pointer"
              onClick={e => {
                e.preventDefault();
                deleteEntrenamiento(entrenamiento.id_rutina);
              }}
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="2x"
              className="cursor-pointer"
              onClick={() => navigate(`/rutina/ejercicio/editar-rutina/${entrenamiento.id_rutina}`)}
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              size="2x"
              className="cursor-pointer"
              onClick={() => navigate(`/rutina/ejercicio/ver-rutina/${entrenamiento.id_rutina}`)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Entrenamiento;

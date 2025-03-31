import React from 'react';
import useAppContext from '../../../hooks/useAppContext.jsx';
import Entrenamiento from './Entrenamiento.jsx';

const Entrenamientos = () => {
    const { entrenamiento } = useAppContext();
    const { entrenamientos } = entrenamiento;

  return (
    <div>
      {entrenamientos.map((e) => (
        <Entrenamiento 
          key={e.id_ejercicio}
          entrenamiento={e}
        />
      ))}
    </div>
  )
}

export default Entrenamientos;

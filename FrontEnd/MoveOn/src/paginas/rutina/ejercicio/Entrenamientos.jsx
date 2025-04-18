import React from 'react';
import useAppContext from '../../../hooks/useAppContext.jsx';
import Entrenamiento from './Entrenamiento.jsx';

const Entrenamientos = () => {
    const { entrenamientoContexto } = useAppContext();
    const { entrenamientos } = entrenamientoContexto;

  return (
    <div key={1}>
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

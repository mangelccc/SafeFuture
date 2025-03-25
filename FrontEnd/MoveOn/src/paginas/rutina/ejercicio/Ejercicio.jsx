import React from 'react';

const Ejercicio = (props) => {
  return (
    <div className='ejercicio border-2 rounded-lg m-5 border-black dark:border-white w-[300px] h-[300px] p-3'>
        <p><strong>Nombre:</strong> {props.nombre}</p>
        <p><strong>Descripción:</strong> {props.descripcion}</p>
        <p><strong>Grupo Muscular:</strong>{props.grupoMuscular}</p>
        <video controls poster={props.imagen} src={props.video} alt='Video del ejercicio' />
    </div>
  );
};

export default Ejercicio;

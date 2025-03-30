import React from 'react';

const Entrenamiento = (props) => {
  return (
    <div key={props.id_rutina} className='entrenamiento border-2 rounded-lg m-5 border-black dark:border-white p-2 flex flex-col w-full'>
      <p><strong>Nombre: </strong>{props.nombre}</p>
      <p><strong>Descripción: </strong>{props.descripcion}</p>
    </div>
  )
}

export default Entrenamiento;

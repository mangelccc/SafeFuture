import React from 'react';

const Ejercicio = (props) => {
  return (
    <div className='ejercicio border-2 rounded-lg m-5 border-black dark:border-gold w-[300px] h-[300px] p-3 flex flex-col bg- dark:bg-purple dark:text-gold transition-all duration-300 transform hover:scale-105' >
      <p><strong>Nombre:</strong> {props.nombre}</p>
      {/*<p><strong>Descripción:</strong> {props.descripcion}</p>*/}
      <p><strong>Grupo Muscular:</strong> {props.grupoMuscular}</p>
      
      <div className="flex justify-center mt-2">
        <video
          poster={props.imagen}
          src={props.video}
          className='w-[200px] h-[200px] object-cover rounded-lg border-2 dark:border-gold'
        />
      </div>
    </div>
  );
};

export default Ejercicio;

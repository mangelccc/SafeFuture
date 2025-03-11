import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemServicios = ({ icono, texto }) => {
  return (
    <article
      className="group border-2 border-black dark:border-white2 rounded-lg shadow-md text-center cursor-pointer transition duration-300 ease overflow-hidden group-hover:scale-102 hover:shadow-[0_6px_8px_rgba(0,0,0,0.15)] bg-purple dark:bg-black  hover:bg-purple dark:hover:bg-purpleOp "
    >
      <FontAwesomeIcon 
        icon={icono} 
        className="text-8xl py-3 rounded-xl text-gold dark:text-white transition duration-300 ease group-hover:scale-105 group-hover:text-gold"
      />
      <p
        className="text-xs p-3 font-bold text-gold dark:text-white transition duration-300 ease w-full border-t border-t-white group-hover:scale-105 group-hover:text-gold group-hover:border-t-white"
      >
        {texto}
      </p>
    </article>
  );
};

export default ItemServicios;

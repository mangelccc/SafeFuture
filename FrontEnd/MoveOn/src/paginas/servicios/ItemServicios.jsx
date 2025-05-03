// ItemServicios.jsx
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const ItemServicios = ({ icono, texto, link }) => {
  return (
    <Link to={link} className="h-full">
      <article
        className="
          flex flex-col h-full group border-2 border-black dark:border-white2 rounded-lg shadow-md text-center cursor-pointer transition duration-300 ease overflow-hidden group-hover:scale-102 hover:shadow-[0_6px_8px_rgba(0,0,0,0.15)]
          bg-purple dark:bg-black
          hover:bg-purple dark:hover:bg-purpleOp
          hover:dark:border-turq
        "
      >
        <FontAwesomeIcon 
          icon={icono} 
          className="
            sm:text-8xl hsm:text-6xl 
            py-3 rounded-xl 
            text-gold dark:text-white 
            transition duration-300 ease 
            group-hover:scale-105 group-hover:text-gold
          "
        />

        <p
          className="
            flex-grow flex justify-center items-center
            text-xs p-3 font-bold 
            text-gold dark:text-white 
            transition duration-300 ease
            w-full
            border-t border-t-white 
            group-hover:scale-105 
            group-hover:text-gold 
            group-hover:border-t-white
          "
        >
          {texto}
        </p>
      </article>
    </Link>
  );
};

export default ItemServicios;

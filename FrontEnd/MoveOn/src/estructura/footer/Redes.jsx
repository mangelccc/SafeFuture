import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Redes = ({ icono, nombre }) => {
  return (
    <li className="flex align-center justify-center rounded-lg  text-center cursor-pointer transition-transform transition-shadow duration-300 ease-in-out overflow-hidden hover:scale-105  hover:bg-purpleOp">
      <FontAwesomeIcon 
        className="text-xl py-2 px-2 text-white transition-all duration-300 ease-in-out" 
        icon={icono} 
      />
    </li>
  );
};

export default Redes;

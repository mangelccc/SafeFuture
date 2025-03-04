import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Redes = ({ icono, nombre }) => {
  return (
    <li className="flex align-center justify-center rounded-lg  text-center cursor-pointer transition-transform transition-shadow duration-300 ease-in-out overflow-hidden hover:scale-105 hover:shadow-[0_6px_8px_rgba(0,0,0,0.15)] hover:bg-[#6520ee70]">
      <FontAwesomeIcon 
        className="text-xl py-2 px-2 text-white transition-all duration-300 ease-in-out" 
        icon={icono} 
      />
    </li>
  );
};

export default Redes;

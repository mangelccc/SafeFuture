import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Redes = ({ icono, nombre }) => {
  return (
    <li className="rounded-lg shadow-md text-center cursor-pointer transition-transform transition-shadow duration-300 ease-in-out relative overflow-hidden hover:scale-105 hover:shadow-[0_6px_8px_rgba(0,0,0,0.15)] hover:bg-[#6520ee70]">
      <FontAwesomeIcon 
        className="text-[1.2em] py-[0.2em] px-[0.5em] rounded-[10px] text-[#F5F5F5] transition-all duration-300 ease-in-out" 
        icon={icono} 
      />
    </li>
  );
};

export default Redes;

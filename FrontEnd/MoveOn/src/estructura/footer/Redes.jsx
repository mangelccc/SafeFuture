import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Redes = ({ icono, nombre, link }) => {
  return (
    <Link to={link} target="_blank">
      <li className="flex align-center justify-center rounded-lg text-center cursor-pointer transition-transform transition-shadow duration-300 ease-in-out overflow-hidden hover:scale-105 hover:bg-gold active:bg-gold  dark:hover:bg-purpleOp dark:active:bg-purpleOp">
        <FontAwesomeIcon 
          className="text-xl py-2 px-2 dark:text-white " 
          icon={icono} 
        />
      </li>
    </Link>
  );
};

export default Redes;

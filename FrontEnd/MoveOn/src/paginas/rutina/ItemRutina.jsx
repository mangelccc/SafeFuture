import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemRutina = ({ icono, link }) => {
  return (
    <Link
      to={link}
      className="rutinas-item w-48 h-48 flex justify-center items-center 
                 border-2 border-black dark:border-white2 rounded-xl text-gold dark:text-white transition-all duration-300 dark:hover:text-gold
                 bg-purple dark:bg-black  hover:bg-purple dark:hover:bg-purpleOp hover:scale-102 hover:cursor-pointer"
    >
      <FontAwesomeIcon icon={icono} size="5x" />
    </Link>
  );
};

export default ItemRutina;

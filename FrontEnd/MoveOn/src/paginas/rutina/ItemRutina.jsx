// ItemRutina.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemRutina = ({ icono, link, title }) => {
  return (
    <div className="flex flex-col items-center">
      <Link
        to={link}
        className="rutinas-item group relative w-64 h-64 flex justify-center items-center
          border-2 border-black dark:border-white2 rounded-xl text-gold dark:text-white bg-purple dark:bg-black overflow-hidden
          transition-all duration-300 dark:hover:text-gold hover:bg-purple dark:hover:bg-purpleOp hover:dark:border-turq hover:scale-102 hover:cursor-pointer">
        <FontAwesomeIcon icon={icono} size="7x" />

        <div
          className=" absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 hsm:opacity-0">
          <span className="text-white text-lg font-semibold">
            {title}
          </span>
        </div>
      </Link>

      <span className="mt-2 text-base font-semibold text-gold dark:text-white sm:hidden hsm:block">
        {title}
      </span>
    </div>
  );
};

export default ItemRutina;

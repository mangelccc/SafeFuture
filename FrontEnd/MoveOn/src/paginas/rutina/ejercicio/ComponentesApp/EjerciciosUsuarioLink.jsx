import React from "react";
import { Link } from "react-router-dom";

const EjerciciosUsuarioLink = () => {
  return (
      <Link 
        className="p-2 block w-full text-left border-b dark:border-white border-black"
        to='/rutina/ejercicio/ejercicios'
      >
          Mis Ejercicios
      </Link>
  );
};

export default EjerciciosUsuarioLink;

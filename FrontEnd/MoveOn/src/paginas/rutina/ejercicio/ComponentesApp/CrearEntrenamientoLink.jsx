import React from "react";
import { Link } from "react-router-dom";

const CrearEntrenamientoLink = () => {
  return (
    <Link to='/rutina/ejercicio/crear-entrenamiento' 
    className="p-2 block w-full text-left border-b dark:border-white border-black">
        Crear Entrenamiento
    </Link>
  );
};

export default CrearEntrenamientoLink;

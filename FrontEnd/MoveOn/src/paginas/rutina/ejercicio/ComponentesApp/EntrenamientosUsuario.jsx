import React from "react";
import { Link } from "react-router-dom";

const EntrenamientosUsuarioLink = () => {
  return (
    <Link to='/rutina/ejercicio/entrenamientos' className="p-2 block w-full text-left border-b dark:border-white border-black">
        Mis Entrenamientos
    </Link>
  );
};

export default EntrenamientosUsuarioLink;

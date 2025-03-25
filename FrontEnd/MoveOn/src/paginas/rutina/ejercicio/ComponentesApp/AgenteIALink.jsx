import React from "react";
import { Link } from "react-router-dom";

const AgenteIALink = () => {
  return (
    <Link to='/rutina/ejercicio/entrenador-personal' className="p-2 placeholder:block w-full text-left border-b dark:border-white border-black">
              Entrenador Personal "beta"
            </Link>
  );
};

export default AgenteIALink;

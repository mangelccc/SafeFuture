import React from "react";
import { NavLink } from "react-router-dom";

const CrearEntrenamientoLink = () => {
  return (
    <NavLink
      to="/rutina/ejercicio/crear-entrenamiento"
      className={({ isActive }) =>
        `p-2 block w-full text-left border-b dark:border-white border-black rounded transition-all
        ${isActive ? "bg-purple text-white" : "hover:bg-purpleOp"}`
      }
    >
      Crear Entrenamiento
    </NavLink>
  );
};

export default CrearEntrenamientoLink;

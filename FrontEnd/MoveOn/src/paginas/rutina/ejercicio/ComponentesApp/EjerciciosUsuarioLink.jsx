import React from "react";
import { NavLink } from "react-router-dom";

const EjerciciosUsuarioLink = () => {
  return (
    <NavLink
      to="/rutina/ejercicio/ejercicios"
      className={({ isActive }) =>
        `p-2 block w-full text-left border-b dark:border-white border-black rounded transition-all
        ${isActive ? "bg-purple text-white" : "hover:bg-purpleOp"}`
      }
    >
      Mis Ejercicios
    </NavLink>
  );
};

export default EjerciciosUsuarioLink;

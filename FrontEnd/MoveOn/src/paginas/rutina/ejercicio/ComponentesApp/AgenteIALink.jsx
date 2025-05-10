import React from "react";
import { NavLink } from "react-router-dom";

const AgenteIALink = () => {
  return (
    <NavLink
      to="/rutina/ejercicio/entrenador-personal"
      className={({ isActive }) =>
        `p-2 block w-full text-left border-b dark:border-white border-black rounded transition-all
        ${isActive ? "bg-purple text-white" : "hover:bg-purpleOp"}`
      }
    >
      Entrenador Personal "beta"
    </NavLink>
  );
};

export default AgenteIALink;

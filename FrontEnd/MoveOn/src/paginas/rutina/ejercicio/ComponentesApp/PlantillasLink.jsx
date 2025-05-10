import React from "react";
import { NavLink } from "react-router-dom";

const PlantillasLink = () => {
  return (
    <NavLink
      to="/rutina/ejercicio/plantillas"
      className={({ isActive }) =>
        `p-2 block w-full text-left border-b dark:border-white border-black rounded transition-all
        ${isActive ? "bg-purple text-white" : "hover:bg-purpleOp"}`
      }
    >
      Plantillas
    </NavLink>
  );
};

export default PlantillasLink;

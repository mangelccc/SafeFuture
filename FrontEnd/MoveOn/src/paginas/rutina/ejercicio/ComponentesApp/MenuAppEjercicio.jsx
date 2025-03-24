import React from "react";
import { Link } from "react-router-dom";
import ContenedorMenu from "../../../../contenedores/contenedores-ejercicios/ContenedorMenuAppEjercicio.jsx";
import CrearEntrenamiento from "./CrearEntrenamientoLink.jsx";
import EjerciciosUsuario from "./EjerciciosUsuarioLink.jsx";
import EntrenamientosUsuario from "./EntrenamientosUsuario.jsx";
import Plantillas from "./PlantillasLink.jsx";
import EntrenadorPersonal from "./AgenteIALink.jsx";

const MenuAppEjercicio = () => {
  return (
      <ContenedorMenu> 
        <CrearEntrenamiento />
        <EjerciciosUsuario />
        <EntrenamientosUsuario />
        <Plantillas />
        <EntrenadorPersonal />
      </ContenedorMenu>
  );
};

export default MenuAppEjercicio;

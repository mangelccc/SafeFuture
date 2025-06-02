import React from "react";
import ContenedorMenu from "../../../../contenedores/contenedores-ejercicios/ContenedorMenuAppEjercicio.jsx";
import CrearEntrenamiento from "./CrearEntrenamientoLink.jsx";
import EjerciciosUsuario from "./EjerciciosUsuarioLink.jsx";
import EntrenamientosUsuario from "./EntrenamientosUsuario.jsx";
import Plantillas from "./PlantillasLink.jsx";
import AgenteAI from "./AgenteIALink.jsx";

const MenuAppEjercicio = () => {
  return (
      <ContenedorMenu> 
        <CrearEntrenamiento />
        <EjerciciosUsuario />
        <EntrenamientosUsuario />
        <Plantillas />
        <AgenteAI />
      </ContenedorMenu>
  );
};

export default MenuAppEjercicio;

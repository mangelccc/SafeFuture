import React from "react";
import Contenedor from "../../../contenedores/contenedores-ejercicios/ContenedorAppEjercicios.jsx";
import Menu from "./ComponentesApp/MenuAppEjercicio.jsx";
import Cuerpo from "./ComponentesApp/CuerpoAppEjercicio.jsx";

const MiniAppEjercicios = () => {

  return (

    <Contenedor>
      <Menu />
      <Cuerpo />
    </Contenedor>

  );
};

export default MiniAppEjercicios;

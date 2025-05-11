import React from "react";
import Contenedor from "../../../contenedores/contenedores-ejercicios/ContenedorAppEjercicios.jsx";
import Menu from "./ComponentesApp/MenuAppEjercicio.jsx";
import Cuerpo from "./ComponentesApp/CuerpoAppEjercicio.jsx";

const MiniAppEjercicios = () => {

  return (

    <Contenedor>
      <div className="hsm:hidden sm:block">
        <Menu />
      </div>
      <Cuerpo />
    </Contenedor>

  );
};

export default MiniAppEjercicios;

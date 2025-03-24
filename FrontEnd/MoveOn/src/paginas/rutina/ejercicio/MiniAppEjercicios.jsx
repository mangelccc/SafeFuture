import React from "react";
import ProvedorEjercicios from "../../../contextos/EjerciciosContexto.jsx";
import Contenedor from "../../../contenedores/contenedores-ejercicios/ContenedorAppEjercicios.jsx";
import Menu from "./ComponentesApp/MenuAppEjercicio.jsx";
import Cuerpo from "./ComponentesApp/CuerpoAppEjercicio.jsx";

const MiniAppEjercicios = () => {
  return (
    <ProvedorEjercicios>
      <Contenedor>
        <Menu />
        <Cuerpo />
      </Contenedor>
    </ProvedorEjercicios>
  );
};

export default MiniAppEjercicios;

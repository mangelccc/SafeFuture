import React from "react";
import Alimentos from "./alimentos/Alimentos";
import FiltrosAlimentos from "./filtros/FiltrosAlimentos";
import Administracion from "./administracion/Administracion";
import "./CrearDieta.css";


const CrearDieta = () => {
  return (
    <>
      <FiltrosAlimentos/>
      <Alimentos/>
      <Administracion/>
    </>
  );
};

export default CrearDieta;

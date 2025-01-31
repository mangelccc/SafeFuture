import React from "react";
import Alimentos from "./alimentos/Alimentos";
import FiltrosAlimentos from "./filtros/FiltrosAlimentos";
import CrearAlimento from "./administracion/crearAlimento";
import "./CrearDieta.css";


const CrearDieta = () => {
  return (
    <>
      <FiltrosAlimentos/>
      <CrearAlimento/>
      <Alimentos/>
    </>
  );
};

export default CrearDieta;

import React from "react";
import Alimentos from "./alimentos/Alimentos";
import FiltrosAlimentos from "./filtros/FiltrosAlimentos";
import "./CrearDieta.css";


const CrearDieta = () => {
  return (
    <>
      <FiltrosAlimentos/>
      <Alimentos/>
    </>
  );
};

export default CrearDieta;

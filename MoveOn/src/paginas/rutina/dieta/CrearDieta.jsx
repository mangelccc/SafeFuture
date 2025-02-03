import React from "react";
import Alimentos from "./alimentos/Alimentos.jsx";
import FiltrosAlimentos from "./filtros/FiltrosAlimentos.jsx";
import CrearAlimento from "./administracion/CrearAlimento.jsx";
import MisListas from "./crear_lista_GPT/MisListas.jsx";
import "./CrearDieta.css";


const CrearDieta = () => {
  return (
    <>
      <div className="crear-dieta">
        <div className="dieta-alimentos">
          <FiltrosAlimentos/>
          <CrearAlimento/>
          <Alimentos/>
        </div>
        <div className="dieta-listas">
          <MisListas/>
        </div>
      </div>
    </>
  );
};

export default CrearDieta;

import React from "react";
import { Routes, Route } from "react-router-dom";
import FormularioMacros from "../paginas/rutina/dieta/formulario_macros/PasosMultiples.jsx";
import CrearDieta from "../paginas/rutina/dieta/CrearDieta.jsx";

const SubRutasRutina = () => {
  return (
    <>
      <Routes>
        <Route path="/Rutina/FormularioMacros" element={<FormularioMacros />} />
        <Route path="/Rutina/CrearDieta" element={<CrearDieta />} />
      </Routes>
    </>
  );
};

export default SubRutasRutina;
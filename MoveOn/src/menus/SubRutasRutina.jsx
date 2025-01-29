import React from "react";
import { Routes, Route } from "react-router-dom";
import Alimentos from "../paginas/rutina/alimentos/Alimento.jsx";



const SubRutasRutina = () => {
  return (
    <>
      <Routes>
        <Route path="/Rutina/Alimentos" element={<Alimentos />} />
      </Routes>
    </>
  );
};

export default SubRutasRutina;
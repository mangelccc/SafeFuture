import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/Inicio.jsx";
import IniciarSesion from "../sesion/IniciarSesion.jsx";
import ListasDeCompras from "../paginas/ListasDeCompras/ListasDeCompras.jsx";
import Perfil from "../paginas/Perfil.jsx";
import Ayuda from "../paginas/Ayuda.jsx";
import Error from "../paginas/Error.jsx";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/login' element={<IniciarSesion />} />
        <Route path='/listasCompras' element={<ListasDeCompras />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/ayuda' element={<Ayuda />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default Rutas;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/inicio/Inicio.jsx";
import QueSomos from "../paginas/biografia/QueSomos.jsx";
import Servicios from "../paginas/servicios/Servicios.jsx";
import Rutina from "../paginas/rutina/Rutina.jsx";
import Foro from "../paginas/foro/Foro.jsx";
import Contactanos from "../paginas/contactanos/Contactanos.jsx";
import FormularioMacros from "../paginas/rutina/dieta/formulario_macros/PasosMultiples.jsx";
import GestorListas from "../paginas/rutina/dieta/GestorListas.jsx";

import Usuario from "../paginas/sesion/Usuario.jsx";
import UsuarioInformacion from "../paginas/usuario_informacion/UsuarioInformacion.jsx";

import RouterAuth from "./RouterAuth.jsx";

import Error from "../paginas/error/Error.jsx";


const RutasPaginas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/QueSomos' element={<QueSomos />} />
        <Route path='/Servicios' element={<Servicios />} />
        <Route
          path="/rutina"
          element={
            <RouterAuth>
              <Rutina />
            </RouterAuth>
          }
        />
        <Route path="/Rutina/FormularioMacros" element={<FormularioMacros />} />
        <Route path="/Rutina/CrearDieta" element={<GestorListas />} />

        <Route path='/Foro' element={<Foro />} />
        <Route path='/Contactanos' element={<Contactanos />} />

        <Route path='/Usuario' element={<Usuario />} />
        <Route path='/UsuarioInformacion' element={<UsuarioInformacion />} />
        
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default RutasPaginas;
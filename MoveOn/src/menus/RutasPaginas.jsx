import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/inicio/Inicio.jsx";
import Dietas from "../paginas/dietas/Dietas.jsx";
import Deporte from "../paginas/deporte/Deporte.jsx";
import CambiarEntorno from "../paginas/cambiar_entorno/Cambiarentorno.jsx";
import Usuario from "../paginas/sesion/Usuario.jsx";
import UsuarioInformacion from "../paginas/usuario_informacion/UsuarioInformacion.jsx";

import Error from "../paginas/error/Error.jsx";


const RutasPaginas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Dietas' element={<Dietas />} />
        <Route path='/Deporte' element={<Deporte />} />
        <Route path='/CambiarEntorno' element={<CambiarEntorno />} />
        <Route path='/Usuario' element={<Usuario />} />
        <Route path='/UsuarioInformacion' element={<UsuarioInformacion />} />
        
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default RutasPaginas;
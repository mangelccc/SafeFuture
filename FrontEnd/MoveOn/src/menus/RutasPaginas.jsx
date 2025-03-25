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

import Ejercicio from "../paginas/rutina/ejercicio/MiniAppEjercicios.jsx";

import GestorEjercicios from "../paginas/rutina/ejercicio/GestorEjercicios.jsx";
import Entrenamientos from "../paginas/rutina/ejercicio/Entrenamientos.jsx";
import Plantillas from "../paginas/rutina/ejercicio/Plantillas.jsx";
import AgenteEntrenadorIA from "../paginas/rutina/ejercicio/AgenteEntrenadorIA.jsx";
import CrearEntrenamiento from "../paginas/rutina/ejercicio/CrearEntrenamiento.jsx";



import Usuario from "../paginas/sesion/Usuario.jsx";
import UsuarioInformacion from "../paginas/usuario_informacion/UsuarioInformacion.jsx";

import RouterAuth from "./RouterAuth.jsx";

import Error from "../paginas/error/Error.jsx";


const RutasPaginas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/que-somos' element={<QueSomos />} />
        <Route path='/servicios' element={<Servicios />} />


        <Route path="/rutina" element={<Rutina />} />
        <Route path="/rutina/formulario-macros" element={<FormularioMacros />} />
        <Route path="/rutina/crear-dieta" element={<GestorListas />} />

        <Route
          path="/rutina/ejercicio"
          element={
            <Ejercicio />
          }
        >
          <Route path='crear-entrenamiento' element={<CrearEntrenamiento />} />
          <Route path='ejercicios' element={<GestorEjercicios />} />
          <Route path='entrenamientos' element={<Entrenamientos />} />
          <Route path='plantillas' element={<Plantillas />} />
          <Route path='entrenador-personal' element={<AgenteEntrenadorIA />} />
        </Route>

        <Route path='/foro' element={<Foro />} />
        <Route path='/contactanos' element={<Contactanos />} />

        <Route path='/usuario' element={<Usuario />} />
        <Route path='/usuario-informacion' element={<UsuarioInformacion />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default RutasPaginas;
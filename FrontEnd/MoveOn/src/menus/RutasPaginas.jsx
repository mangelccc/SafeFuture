import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/inicio/Inicio.jsx";
import QueSomos from "../paginas/biografia/QueSomos.jsx";
import Servicios from "../paginas/servicios/Servicios.jsx";
import Rutina from "../paginas/rutina/Rutina.jsx";
import Foro from "../paginas/foro/Foro.jsx";
import Contactanos from "../paginas/contactanos/Contactanos.jsx";

import Ejercicio from "../paginas/rutina/ejercicio/MiniAppEjercicios.jsx";

import GestorEjercicios from "../paginas/rutina/ejercicio/GestorEjercicios.jsx";
import Entrenamientos from "../paginas/rutina/ejercicio/Entrenamientos.jsx";
import Plantillas from "../paginas/rutina/ejercicio/Plantillas.jsx";
import AgenteEntrenadorIA from "../paginas/rutina/ejercicio/AgenteEntrenadorIA.jsx";
import CrearEntrenamiento from "../paginas/rutina/ejercicio/CrearEntrenamiento.jsx";
import FormularioEjercicio from "../paginas/rutina/ejercicio/FormularioEjercicio.jsx";

/* Perfil e info del usuario */
import Usuario from "../paginas/sesion/Usuario.jsx";
import UsuarioInformacion from "../paginas/usuario_informacion/UsuarioInformacion.jsx";

/* Para dietas */
import Dietas from "../paginas/rutina/dieta/DietasGestion.jsx"
import DietasCrear from "../paginas/rutina/dieta/crear_dietas/DietasCrear.jsx"
import AlimentosDieta from "../paginas/rutina/dieta/alimentos/AlimentosDieta.jsx";


import Error from "../paginas/error/Error.jsx";


const RutasPaginas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/que-somos' element={<QueSomos />} />
        <Route path='/servicios' element={<Servicios />} />


        <Route path="/rutina" element={<Rutina />} />
        <Route path="/rutina/dietas" element={<Dietas />} />
        <Route path="/rutina/dietas/:id" element={<AlimentosDieta />} />
        <Route path="/rutina/dietas-crear" element={<DietasCrear />} />



        <Route
          path="/rutina/ejercicio"
          element={
            <Ejercicio />
          }
        >
          <Route path='crear-entrenamiento' element={<CrearEntrenamiento />} />
          <Route path='ejercicios' element={<GestorEjercicios />} />
          <Route path='crear-ejercicio' element={<FormularioEjercicio />} />
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
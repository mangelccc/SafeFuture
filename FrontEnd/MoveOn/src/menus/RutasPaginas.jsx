import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Inicio from "../paginas/inicio/Inicio.jsx";
import DescubreMas from "../paginas/inicio/DescubreMas.jsx";
import QueSomos from "../paginas/biografia/QueSomos.jsx";
import Servicios from "../paginas/servicios/Servicios.jsx";
import Rutina from "../paginas/rutina/Rutina.jsx";
import Contactanos from "../paginas/contactanos/Contactanos.jsx";
import Ejercicio from "../paginas/rutina/ejercicio/MiniAppEjercicios.jsx";
import GestorEjercicios from "../paginas/rutina/ejercicio/GestorEjercicios.jsx";
import GestorEntrenamientos from "../paginas/rutina/ejercicio/GestorEntrenamientos.jsx";
import Plantillas from "../paginas/rutina/ejercicio/Plantillas.jsx";
import AgenteEntrenadorIA from "../paginas/rutina/ejercicio/AgenteEntrenadorIA.jsx";
import CrearEntrenamiento from "../paginas/rutina/ejercicio/CrearEntrenamiento.jsx";
import FormularioEjercicio from "../paginas/rutina/ejercicio/FormularioEjercicio.jsx";
import VistaRutina from '../paginas/rutina/ejercicio/VistaRutina.jsx';
import Calendario from "../paginas/calendario/Calendario.jsx";
import DejarDeFumar from "../paginas/rutina/no-fumar/DejarDeFumar.jsx";
import Error from "../paginas/error/Error.jsx";


/* Para verificar que la sesión esta iniciada */
import RouterAuth from "./RouterAuth.jsx";

/* Perfil e info del usuario */
import Usuario from "../paginas/sesion/Usuario.jsx";
import UsuarioInformacion from "../paginas/usuario_informacion/UsuarioInformacion.jsx";
import UsuarioCheckEmail from "../paginas/usuario_informacion/UsuarioCheckEmail.jsx";
import useAppContext from '../hooks/useAppContext.jsx';

/* Para dietas */
import Dietas from "../paginas/rutina/dieta/DietasGestion.jsx"
import DietasCrear from "../paginas/rutina/dieta/crear_dietas/DietasCrear.jsx"
import AlimentosDieta from "../paginas/rutina/dieta/alimentos/AlimentosDieta.jsx";
import DietasDetalles from "../paginas/rutina/dieta/DietasDetalles.jsx";
import PoliticaCookies from "../paginas/informacion/PoliticaCookies.jsx";
import PoliticaPrivacidad from "../paginas/informacion/PoliticaPrivacidad.jsx";
import PreguntasFrecuentes from "../paginas/informacion/PreguntasFrecuentes.jsx";
import SitiosRecomendados from "../paginas/informacion/SitiosRecomendados.jsx";
import DetalleEjercicio from "../paginas/rutina/ejercicio/DetalleEjercicio.jsx";
import DietasAdmin from "../paginas/rutina/dieta/DietasAdmin.jsx";
import UsuarioAdmin from "../paginas/usuario_informacion/UsuarioAdmin.jsx";
import EditarRutina from "../paginas/rutina/ejercicio/EditarRutina.jsx";

import Vuelos from "../paginas/servicios/vuelos/vuelos.jsx";
import MapaMundi from "../paginas/servicios/mapa/MapaMundi.jsx";


const RutasPaginas = () => {
    const { auth } = useAppContext();
    const { usuario } = auth;

  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/descubre' element={<DescubreMas />} />
        <Route path='/que-somos' element={<QueSomos />} />
        <Route path='/rutina' element={<Rutina />} />
        <Route path='/contacto' element={<Contactanos />} />
        <Route path='/recuperar-passwd' element={<UsuarioCheckEmail />} />
        <Route path='/usuario' element={<Usuario />} />


        <Route path='/servicios' element={<Servicios />} />
        <Route path='/servicios/vuelos' element={<Vuelos />} />
        <Route path='/servicios/mapa' element={<MapaMundi />} />


        {/* Lo que esté aqui, se necesitará iniciar sesión. */}
        <Route element={<RouterAuth><Outlet /></RouterAuth>}>

          <Route path="/rutina/dietas" element={<Dietas />} />
          <Route path="/rutina/dietas/:id" element={<AlimentosDieta />} />
          <Route path="/rutina/dietas/:id/detalles" element={<DietasDetalles />} />
          <Route path="/rutina/dietas-crear" element={<DietasCrear />} />
          {usuario?.rol === 'Administrador' && 
          <>
            <Route path="/rutina/dietas/admin" element={<DietasAdmin />} />
            <Route path="/usuario-informacion/admin" element={<UsuarioAdmin />} />
          </>
          }
          <Route path="/rutina/calendario" element={<Calendario />} />
          <Route path="/rutina/no-fumar" element={<DejarDeFumar />} />

          <Route path="/rutina/ejercicio" element={<Ejercicio />}>
            <Route index element={<CrearEntrenamiento />} />
            <Route path='crear-entrenamiento' element={<CrearEntrenamiento />} />
            <Route path='ejercicios' element={<GestorEjercicios />} />
            <Route path='crear-ejercicio' element={<FormularioEjercicio />} />
            <Route path='entrenamientos' element={<GestorEntrenamientos />} />
            <Route path='plantillas' element={<Plantillas />} />
            <Route path='entrenador-personal' element={<AgenteEntrenadorIA />} />
            <Route path="/rutina/ejercicio/detalle/:id" element={<DetalleEjercicio />} />

            <Route path="ver-rutina/:id" element={<VistaRutina />} />
            <Route path="editar-rutina/:id" element={<EditarRutina />} />
          </Route>
          <Route path='/usuario-informacion' element={<UsuarioInformacion />} />
        </Route>

      <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
      <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route path="/sitios" element={<SitiosRecomendados />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default RutasPaginas;
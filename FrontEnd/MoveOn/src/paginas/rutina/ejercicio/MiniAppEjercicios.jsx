import React, {useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import ProvedorEjercicios from "../../../contextos/EjerciciosContexto.jsx";
import ProvedorEntrenamiento from "../../../contextos/EntrenamientoContexto.jsx";
import Contenedor from "../../../contenedores/contenedores-ejercicios/ContenedorAppEjercicios.jsx";
import Menu from "./ComponentesApp/MenuAppEjercicio.jsx";
import Cuerpo from "./ComponentesApp/CuerpoAppEjercicio.jsx";
import useAppContext from "../../../hooks/useAppContext.jsx";

const MiniAppEjercicios = () => {

  const { auth } = useAppContext();
  const { sesionIniciada } = auth;
    const navegar = useNavigate();

  useEffect(() => {
          if (!sesionIniciada) {
            navegar("/usuario");
          }
        }, []);
  return (
    <ProvedorEjercicios>
      <Contenedor>
        <Menu />
        <ProvedorEntrenamiento>
          <Cuerpo />
        </ProvedorEntrenamiento>
      </Contenedor>
    </ProvedorEjercicios>
  );
};

export default MiniAppEjercicios;

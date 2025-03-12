import React from "react";
import { Link, Outlet } from "react-router-dom";

const MiniAppEjercicios = () => {
  return (
    <div className="mini-app text-white flex flex-row items-center border-2 rounded-lg m-5 border-white">
      <div className="mini-app-menu flex flex-col items-start space-y-4 border-r border-white p-4"> 
        <Link to='/rutina/ejercicio/crear-entrenamiento'>
          Crear Entrenamiento
        </Link>
        <Link to='/rutina/ejercicio/ejercicios'>
          Mis Ejercicios
        </Link>
        <Link to='/rutina/ejercicio/entrenamientos'>
          Mis Entrenamientos
        </Link>
        <Link to='/rutina/ejercicio/plantillas'>
          Plantillas
        </Link>
        <Link to='/rutina/ejercicio/entrenador-personal'>
          Entrenador Personal "beta"
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MiniAppEjercicios;

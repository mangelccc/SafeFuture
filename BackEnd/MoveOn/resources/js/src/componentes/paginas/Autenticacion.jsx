import React from "react";
import "./Autenticacion.css";
import IniciarSesion from "../sesion/IniciarSesion.jsx";
import Errores from "../Errores.jsx";
import useContexto from '../../hooks/useContexto.jsx'

const Autenticacion = () => {
  const { errorUsuario } = useContexto("sesion");

  return (
    <>
      <div className='autenticacion'>
        <IniciarSesion/>
      </div>
      <Errores>{errorUsuario}</Errores>
    </>
  );
};

export default Autenticacion;
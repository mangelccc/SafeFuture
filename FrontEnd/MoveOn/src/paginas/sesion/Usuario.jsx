import React, { useContext, useEffect } from "react";
import { contextoAuth } from "../../contextos/AuthContexto.jsx";
import Superpuesto from "./sesion_componentes/Superpuesto.jsx";
import UsuarioChangePasswd from "../usuario_informacion/UsuarioChangePasswd.jsx";

import IniciarSesion from "./sesion_componentes/IniciarSesion.jsx";
import CrearCuenta from "./sesion_componentes/CrearCuenta.jsx";
import "./Usuario.css";
import { useNavigate } from "react-router-dom";

const Usuario = () => {
  const {
    panelDerechoActivo,
    olvidoContrasena,
    sesionIniciada
  } = useContext(contextoAuth);

  const navegar = useNavigate()

  useEffect(()=>{
    sesionIniciada && navegar("/usuario-informacion")
  },[])


  return (
    <div id="contenedor-usuario">
      <div
        className={`contenedor ${panelDerechoActivo && "panel-derecho-activo"}`}
        id="contenedor"
      >
        <CrearCuenta />
        <div className="contenedor-formularior contenedor-inicio-sesion">
          <div className="formulario">
            {olvidoContrasena ? (
              <UsuarioChangePasswd/>
            ) : (
              <IniciarSesion />
            )}
          </div>
        </div>
        <Superpuesto />
      </div>
    </div>
  );
};

export default Usuario;

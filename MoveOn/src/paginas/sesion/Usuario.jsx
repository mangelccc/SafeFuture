import React, { useContext } from "react";
import { contextoAuth } from "../../contextos/AuthContexto.jsx";
import Superpuesto from "./sesion_componentes/Superpuesto.jsx";
import RecuperarContrasena from "./sesion_componentes/RecuperarContrasena.jsx";
import IniciarSesion from "./sesion_componentes/IniciarSesion.jsx";
import CrearCuenta from "./sesion_componentes/CrearCuenta.jsx";
import "./Usuario.css";

const Usuario = () => {
  const {
    panelDerechoActivo,
    olvidoContrasena,
  } = useContext(contextoAuth);


  return (
    <div id="contenedor-usuario">
      <div
        className={`contenedor ${panelDerechoActivo ? "panel-derecho-activo" : ""}`}
        id="contenedor"
      >
        <CrearCuenta />
        <div className="contenedor-formularior contenedor-inicio-sesion">
          <div className="formulario">
            {olvidoContrasena ? (
              <RecuperarContrasena />
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

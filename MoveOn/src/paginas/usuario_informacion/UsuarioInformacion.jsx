import React, {useContext} from "react";
import { contextoAuth } from "../../contextos/AuthContexto";
import "./UsuarioInformacion.css";

const Usuario = () => {

    const {usuario, cerrarSesion} = useContext(contextoAuth);

  return (
    <div id="usuario-informacion">
    <h3>Cuenta: {usuario.email}</h3>
      <button
        onClick={() => {
          cerrarSesion();
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Usuario;

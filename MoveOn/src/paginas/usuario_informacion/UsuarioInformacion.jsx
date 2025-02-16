import React, {useContext} from "react";
import { contextoAuth } from "../../contextos/AuthContexto.jsx";
import "./UsuarioInformacion.css";

const Usuario = () => {
  // Se extrae el usuario autenticado y la función para cerrar sesión
  const { usuario, cerrarSesion } = useContext(contextoAuth);

  return (
    <div id="usuario-informacion">
      <h3>
        Cuenta:{" "}
        {usuario && usuario.correo
          ? usuario.correo
          : "No hay usuario activo"}
      </h3>
      <button onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
  );
};

export default Usuario;

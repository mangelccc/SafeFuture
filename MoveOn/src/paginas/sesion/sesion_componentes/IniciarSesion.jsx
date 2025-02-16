// src/componentes/sesion_componentes/IniciarSesion.jsx
import React, { useContext } from "react";
import { contextoAuth } from "../../../contextos/AuthContexto.jsx";

const IniciarSesion = () => {
  const { actualizarDato, iniciarSesion, volverInicioSesionClick, errorUsuario, datosSesion } = useContext(contextoAuth);

  return (
    <>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={actualizarDato}
        value={datosSesion.email || ""}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={actualizarDato}
        value={datosSesion.password || ""}
      />
      <a onClick={() => volverInicioSesionClick(true)}>
        ¿Has olvidado la contraseña?
      </a>
      <p>{errorUsuario}</p>
      <button onClick={(e)=>iniciarSesion(e)}>Entrar</button>
    </>
  );
};

export default IniciarSesion;

import React, { useContext } from "react";
import { contextoAuth } from "../../../contextos/AuthContexto.jsx";

const IniciarSesion = () => {

    const {
        actualizarDato,
        iniciarSesion,
        volverInicioSesionClick,
        errorUsuario,
      } = useContext(contextoAuth);

    return (
        <>
            <h2>Iniciar Sesión</h2>
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => actualizarDato(e)}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => actualizarDato(e)}
            />
            <a
                id="recup-contrasena"
                onClick={() => {
                    volverInicioSesionClick(true);
                }}
            >
                ¿Has olvidado la contraseña?
            </a>
            <p>{errorUsuario}</p>
            <button onClick={iniciarSesion}>Entrar</button>
        </>
    );
};

export default IniciarSesion;

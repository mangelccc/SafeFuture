import React, { useContext } from "react";
import { contextoAuth } from "../../../contextos/AuthContexto.jsx";

const RecuperarContrasena = () => {

      const {
        actualizarDato,
        recuperarContrasena,
        volverInicioSesionClick,
        errorUsuario,
      } = useContext(contextoAuth);

    return (
        <>
            <h2>Recuperar Contraseña</h2>
            <input
                type="email"
                name="email"
                placeholder="Tu Email"
                onChange={(e) => actualizarDato(e)}
            />
            <a
                onClick={() => {
                    volverInicioSesionClick(false);
                }}
            >
                Volver al Inicio de Sesión
            </a>
            <p>{errorUsuario}</p>
            <button onClick={(e) => {
                recuperarContrasena(e);
            }}>
                Recuperar
            </button>
        </>
    );
};

export default RecuperarContrasena;

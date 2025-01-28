import React, { useState, useContext } from "react";
import { contextoSesion } from "../../contextos/AuthContexto.jsx";
import "./Usuario.css";

const Usuario = () => {
  const {
    actualizarDato,
    iniciarSesion,
    crearCuenta,
    errorUsuario,
    setErrorUsuario,
    recuperarContrasena
  } = useContext(contextoSesion);

  const [panelDerechoActivo, setPanelDerechoActivo] = useState(false);

  // Nuevo estado para saber si estamos en modo "olvido de contraseña"
  const [olvidoContrasena, setOlvidoContrasena] = useState(false);

  const inicioSesionClick = () => {
    setPanelDerechoActivo(true);
    setErrorUsuario("");
  };

  const registroClick = () => {
    setPanelDerechoActivo(false);
    setErrorUsuario("");
  };

  return (
    <div id="contenedor-usuario">
      <div
        className={`contenedor ${panelDerechoActivo ? "panel-derecho-activo" : ""}`}
        id="contenedor"
      >
        {/* Formulario de Registro */}
        <div className="contenedor-formularior contenedor-registrarse">
          <div className="formulario">
            <h2>Crear Cuenta</h2>
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
            <p>{errorUsuario}</p>
            <button onClick={crearCuenta}>Registrarse</button>
          </div>
        </div>

        {/* Formulario de Inicio de Sesión */}
        <div className="contenedor-formularior contenedor-inicio-sesion">
          <div className="formulario">
            {/* Según el estado olvidoContrasena, mostramos un formulario u otro */}
            {olvidoContrasena ? (
              <>
                <h2>Recuperar Contraseña</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu Email"
                  onChange={(e) => actualizarDato(e)}
                />
                <p>{errorUsuario}</p>
                <button onClick={(e) => {
                  recuperarContrasena(e);
                }}>
                  Recuperar
                </button>
                {/* Botón para volver al formulario de Iniciar Sesión */}
                <a
                  onClick={() => {
                    setOlvidoContrasena(false);
                    setErrorUsuario("");
                  }}
                >
                  Volver al Inicio de Sesión
                </a>
              </>
            ) : (
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
                    setOlvidoContrasena(true);
                    setErrorUsuario("");
                  }}
                >
                  ¿Has olvidado la contraseña?
                </a>
                <p>{errorUsuario}</p>
                <button onClick={iniciarSesion}>Entrar</button>
              </>
            )}
          </div>
        </div>

        {/* Contenedor superpuesto */}
        <div className="contenedor-superpuesto">
          <div className="superpuesto">
            <div className="panel-superpuesto superpuesto-izquierda">
              <h2>¡Hola, Amigo!</h2>
              <p>Ingresa tus datos y comienza tu viaje con nosotros</p>
              <button className="escondido" onClick={registroClick} id="signIn">
                Iniciar Sesión
              </button>
            </div>
            <div className="panel-superpuesto superpuesto-derecha">
              <h2>¡Bienvenido de Nuevo!</h2>
              <p>Para mantenerte conectado con nosotros, por favor inicia sesión</p>
              <button className="escondido" onClick={inicioSesionClick} id="signUp">
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuario;

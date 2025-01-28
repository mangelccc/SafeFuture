import React, { useContext } from "react";
import { contextoAuth } from "../../../contextos/AuthContexto.jsx";

const CrearCuenta = () => {

    const {
        actualizarDato,
        crearCuenta,
        errorUsuario,
      } = useContext(contextoAuth);

  return (
    <>
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
    </>
  );
};

export default CrearCuenta;

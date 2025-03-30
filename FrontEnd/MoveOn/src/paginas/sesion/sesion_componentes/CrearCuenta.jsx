import React, { useContext } from "react";
import { contextoAuth } from "../../../contextos/AuthContexto.jsx";

const CrearCuenta = () => {
  const {
    actualizarDato,
    crearCuenta,
    errorUsuario,
    datosSesion
  } = useContext(contextoAuth);

  return (
    <>
      {/* Formulario de Registro */}
      <div className="contenedor-formularior contenedor-registrarse">
        <div className="formulario">
          <h2>Crear Cuenta</h2>
          <form>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={actualizarDato}
              value={datosSesion.nombre || ""}
            />
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
            <input
              type="number"
              name="edad"
              placeholder="Edad"
              onChange={actualizarDato}
              value={datosSesion.edad || ""}
            />
            <select name="sexo" onChange={actualizarDato} value={datosSesion.sexo || ""}>
              <option value="" disabled>Selecciona Sexo</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
          </form>
          <p className="error-registro">{errorUsuario}</p>
          <button onClick={crearCuenta}>Registrarse</button>
        </div>
      </div>
    </>
  );
};

export default CrearCuenta;

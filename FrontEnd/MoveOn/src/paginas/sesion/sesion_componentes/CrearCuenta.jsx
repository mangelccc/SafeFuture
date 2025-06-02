import React, { useContext } from "react";
import { contextoAuth } from "../../../contextos/AuthContexto.jsx";

const CrearCuenta = () => {
  const { actualizarDato, crearCuenta, errorUsuario, datosSesion, muestraRegistroClick, cargando } = useContext(contextoAuth);
  
  return (
    <>
      <div className="contenedor-formularior contenedor-registrarse">
        <div className="formulario">
          <h2>Crear Cuenta</h2>
          <form>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              autoComplete="name"
              onChange={actualizarDato}
              value={datosSesion.nombre || ""}
            />
            {errorUsuario?.nombre && <small className="text-red-500">{errorUsuario.nombre}</small>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="username"
              onChange={actualizarDato}
              value={datosSesion.email || ""}
            />
            {errorUsuario?.email && <small className="text-red-500">{errorUsuario.email}</small>}
            {errorUsuario?.fetch && <small className="text-red-500">{errorUsuario.fetch}</small>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={actualizarDato}
              value={datosSesion.password || ""}
            />
            {errorUsuario?.password && <small className="text-red-500">{errorUsuario.password}</small>}

            <input
              type="number"
              name="edad"
              placeholder="Edad"
              onChange={actualizarDato}
              value={datosSesion.edad || ""}
            />
            {errorUsuario?.edad && <small className="text-red-500">{errorUsuario.edad}</small>}

            <select name="sexo" onChange={actualizarDato} value={datosSesion.sexo || ""}>
              <option value="" disabled>Selecciona Sexo</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
            {errorUsuario?.sexo && <small className="text-red-500">{errorUsuario.sexo}</small>}
          </form>

          <button onClick={crearCuenta}>{cargando ? `Creando cuenta . . .` : `Registrarse`}</button>

          <p className="mt-5">
            ¿Ya tienes cuenta?
            <span
              onClick={() => muestraRegistroClick(false)}
              className="cursor-pointer underline text-purple pl-2">
              Inicia Sesión
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CrearCuenta;

// IniciarSesion.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextoAuth } from "../../../contextos/AuthContexto.jsx";

const IniciarSesion = () => {
  const { actualizarDato, iniciarSesion, muestraRegistroClick, errorUsuario, datosSesion, cargando } = useContext(contextoAuth);

  return (
    <>
      <h2>Iniciar Sesión</h2>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="username"
          onChange={actualizarDato}
          value={datosSesion.email || ""}
        />
        {errorUsuario.email && <small className="text-red-500">{errorUsuario.email}</small>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          onChange={actualizarDato}
          value={datosSesion.password || ""}
        />
        {errorUsuario.password && <small className="text-red-500">{errorUsuario.password}</small>}
        {errorUsuario?.unauthorized && <small className="text-red-500">{errorUsuario.unauthorized}</small>}
      </form>
      <Link to={"/recuperar-passwd"}>
        ¿Has olvidado la contraseña?
      </Link>

      <button onClick={(e) => iniciarSesion(e)}>{cargando ? `Iniciando sesión . . .` : `Entrar`}</button>
      {/* Agregamos el enlace para cambiar a registro */}
      <p className="mt-5">
        ¿No tienes cuenta?
        <span
          onClick={() => muestraRegistroClick(true)}
          className="cursor-pointer underline text-purple pl-2">
          Regístrate
        </span>
      </p>
    </>
  );
};

export default IniciarSesion;

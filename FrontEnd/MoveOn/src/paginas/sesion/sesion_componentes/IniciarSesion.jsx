// IniciarSesion.jsx
import React, { useContext } from "react";
import { contextoAuth } from "../../../contextos/AuthContexto.jsx";

const IniciarSesion = () => {
  const { actualizarDato, iniciarSesion, muestraRegistroClick, volverInicioSesionClick, errorUsuario, datosSesion, cargando } = useContext(contextoAuth);

  return (
    <>
      <h2>Iniciar Sesión</h2>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={actualizarDato}
          value={datosSesion.email || ""}
        />
        {errorUsuario.email && <small className="text-red-500">{errorUsuario.email}</small>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={actualizarDato}
          value={datosSesion.password || ""}
        />
        {errorUsuario.password && <small className="text-red-500">{errorUsuario.password}</small>}
        {errorUsuario?.unauthorized && <small className="text-red-500">{errorUsuario.unauthorized}</small>}
      </form>
      <a onClick={() => volverInicioSesionClick(true)}>
        ¿Has olvidado la contraseña?
      </a>

      <button onClick={(e) => iniciarSesion(e)}>{cargando ? `Iniciando sesión . . .` : `Entrar`}</button>
      {/* Agregamos el enlace para cambiar a registro */}
      <p style={{ marginTop: "20px" }}>
        ¿No tienes cuenta?{" "}
        <span
          onClick={() => muestraRegistroClick(true)}
          style={{
            cursor: "pointer",
            color: "#6320EE",
            textDecoration: "underline"
          }}
        >
          Regístrate
        </span>
      </p>
    </>
  );
};

export default IniciarSesion;

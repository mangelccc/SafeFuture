import React from "react";
import useContexto from '../../hooks/useContexto.jsx'
import { Link } from 'react-router-dom';
import "./IniciarSesion.css";

const IniciarSesion = () => {
  const { iniciarSesion, actualizarDato } =
    useContexto("sesion");

    

  return (
    <div className='cuentaUsuario'>
      <h2>Iniciar sesión</h2>

      <>
        <label htmlFor='email'>Correo electrónico</label>
        <input
          type='email'
          name='email'
          id='loginemail'
          placeholder='Su email.'
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
        <label htmlFor='password'>Contraseña</label>
        <input
          type='password'
          name='password'
          id='loginpassword'
          placeholder='Su contraseña.'
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
        <button
          className="botonSesion"
          onClick={(e) => {
            iniciarSesion();    // Llamar a la función de inicio de sesión
          }}
        >
          Iniciar sesión
        </button>
        <p>
          <Link to="/reset-passwd">¿Has olvidado tu contraseña?</Link>
        </p>
        <p>
          <Link to="/register">¿No tienes cuenta? Puedes crearla aquí.</Link>
        </p>
      </>

    </div>
  );
};

export default IniciarSesion;


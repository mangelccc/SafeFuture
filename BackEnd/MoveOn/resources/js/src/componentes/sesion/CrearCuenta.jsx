import React from "react";
import { Link } from 'react-router-dom';
import Errores from "../Errores.jsx";
import useContexto from '../../hooks/useContexto.jsx'

const CrearCuenta = () => {
  // Importar las funciones desde un contexto adecuado.
  const { crearCuenta, actualizarDato, errorUsuario } = useContexto("sesion");

  return (
    <>
    <div className='cuentaUsuario'>
      <h2>Crea una nueva cuenta</h2>
      <label htmlFor='email'>Correo electrónico</label>
      <input
        type='email'
        name='email'
        id='createemail'
        placeholder='Su correo electrónico.'
        onChange={(e) => {
          actualizarDato(e);
        }}
      />
      <label htmlFor='password'>Contraseña</label>

      <input
        type='password'
        name='password'
        id='createpassword'
        placeholder='Su nueva contraseña.'
        onChange={(e) => {
          actualizarDato(e);
        }}
      />
      <button className='botonSesion' onClick={(e) => {
        crearCuenta();
      }}>
        Crear cuenta
      </button>
      <p>
        <Link to="/login">Volver al login</Link>
      </p>
    </div>
    <Errores>{errorUsuario}</Errores>
    </>
  );
};

export default CrearCuenta;

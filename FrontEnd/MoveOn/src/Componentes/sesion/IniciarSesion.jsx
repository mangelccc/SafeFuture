import React from "react";
import CrearCuenta from "./CrearCuenta.jsx";

const IniciarSesion = () => {
  // Se obtienen los objetos necesarios desde el contexto.

  return (
    <>
    <div className='cuentaUsuario'>
      <h2>Iniciar sesión</h2>
      <label htmlFor='email'>Correo electrónico</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Su correo electrónico.'
        onChange={(e) => {}}
      />
      <label htmlFor='password'>Contraseña</label>
    
    <input
      type='password'
      name='password'
      id='password'
      placeholder='Su contraseña.'
      onChange={(e) => {}}
    />
      <button className='botonSesion' onClick={(e) => {}}>
        Iniciar sesión
      </button>
    </div>
    <CrearCuenta/>
    </>
  );
};

export default IniciarSesion;

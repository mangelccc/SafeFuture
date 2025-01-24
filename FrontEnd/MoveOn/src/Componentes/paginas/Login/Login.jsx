import React from 'react'
import IniciarSesion from '../../sesion/IniciarSesion.jsx'
import CrearCuenta from '../../sesion/CrearCuenta.jsx'
import "./Login.css";

const Login = () => {
  return (
    <>
    <div className='inicioSesion'>
      <IniciarSesion/>
      <CrearCuenta />
    </div>
    {/* <Errores>{errorUsuario}</Errores> */}
  </>
  )
}

export default Login
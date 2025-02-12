import React from "react";
import useContexto from '../../hooks/useContexto.jsx'
import "./CerrarSesion.css";


const CerrarSesion = () => {
  
  const { cerrarSesion, usuario } = useContexto("sesion");

  return (
    <div className="cerrarsesion">
      <span>Hola, {usuario?.email} </span> {/* Muestro el correo del usuario, indicándole que esta logueado. */}
      <button onClick={() => cerrarSesion()}>Cerrar sesión</button>
    </div>
  );
};

export default CerrarSesion;

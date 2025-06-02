import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { contextoAuth } from "../contextos/AuthContexto.jsx"; 

const RouterAuth = ({ children }) => {
  const { sesionIniciada } = useContext(contextoAuth);

  // Si la sesión no está iniciada, redirige a la página de inicio de sesión
  if (!sesionIniciada) {
    return <Navigate to="/usuario" replace />;
  }

  // Si está iniciada, muestra el componente hijo
  return children;
};

export default RouterAuth;

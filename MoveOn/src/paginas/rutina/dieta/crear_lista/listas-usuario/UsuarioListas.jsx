import React, { useEffect } from "react";
import useAppContext from "../../../../../hooks/useAppContext.jsx"; 
import UsuarioLista from "./UsuarioLista.jsx";
import "./UsuarioListas.css";

const UsuarioListas = () => {
  // Extraemos el contexto de listas a través del hook centralizado
  const { listas } = useAppContext();
  const { listasUsuario, manejarClicUsuarioListas, obtenerListasUsuario } = listas;
  
  useEffect(() => {
    obtenerListasUsuario();
  }, [obtenerListasUsuario]);

  return (
    <div className="lista-contenedor" onClick={(e) => manejarClicUsuarioListas(e)}>
      {listasUsuario.length > 0 ? (
        listasUsuario.map((lista) => (
          <UsuarioLista key={lista.id} lista={lista} />
        ))
      ) : (
        <p>No tienes listas creadas.</p>
      )}
    </div>
  );
};

export default UsuarioListas;

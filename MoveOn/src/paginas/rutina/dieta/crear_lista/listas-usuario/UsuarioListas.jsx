import React, { useContext,useEffect } from "react";
import { contextoListas } from "../../../../../contextos/ListasContexto";
import UsuarioLista from "./UsuarioLista";
import "./UsuarioListas.css";

const UsuarioListas = () => {
  const { listasUsuario, manejarClicUsuarioListas,obtenerListasUsuario } = useContext(contextoListas);
  
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

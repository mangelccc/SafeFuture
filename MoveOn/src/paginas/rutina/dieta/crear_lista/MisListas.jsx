import React from "react";
import useAppContext from "../../../../hooks/useAppContext";
import CrearLista from "./crear-lista/CrearLista.jsx";
import UsuarioListas from "./listas-usuario/UsuarioListas.jsx";
import "./MisListas.css";

const MisListas = () => {
  // Extraemos el contexto de listas desde el hook centralizado
  const { listas } = useAppContext();
  const { modoVista, alternarLista, error } = listas;

  return (
    <div className="mis-listas">
      <div className="lista-cabeza">
        <h3>{modoVista === "crear" ? "Crear Nueva Lista" : "Mis Listas"}</h3>
        <button onClick={alternarLista}>
          {modoVista === "crear" ? "Mis Listas" : "Crear Lista"}
        </button>
      </div>
      <p>{error}</p>
      <div className="crear-lista-container">
        {modoVista === "crear" ? (
          <CrearLista />
        ) : (
          <UsuarioListas />
        )}
      </div>
    </div>
  );
};

export default MisListas;

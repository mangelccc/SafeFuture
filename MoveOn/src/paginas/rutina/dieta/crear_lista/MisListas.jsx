// MisListas.jsx
import React, { useContext } from "react";
import CrearLista from "./crear-lista/CrearLista.jsx";
import UsuarioListas from "./listas-usuario/UsuarioListas.jsx";
import { contextoListas } from "../../../../contextos/ListasContexto.jsx";

import "./MisListas.css";

const MisListas = () => {

  const {
    modoVista,
    alternarLista,
  } = useContext(contextoListas);

  return (
    <div className="mis-listas">
      <div className="lista-cabeza">
        <h3>{modoVista === "crear" ? "Crear Nueva Lista" : "Mis Listas"}</h3>
        <button onClick={alternarLista}>
          {modoVista === "crear" ? "Mis Listas" : "Crear Lista"}
        </button>
      </div>

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

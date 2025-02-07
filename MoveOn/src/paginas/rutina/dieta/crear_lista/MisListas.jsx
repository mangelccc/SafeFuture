// MisListas.jsx
import React, { useState,useContext } from "react";
import CrearLista from "./CrearLista.jsx";
import UsuarioListas from "./UsuarioListas.jsx";
import { contextoListas } from "../../../../contextos/ListasContexto.jsx";

import "./MisListas.css";

const MisListas = () => {


  const {
    resetearAlimentos,
    modoVista,
    alternarLista,
  } = useContext(contextoListas);


  return (
    <div className="mis-listas">
      <div className="lista-cabeza">
        {/* Cambiar el título según la vista */}
        <h3>{modoVista === "crear" ? "Crear Nueva Lista" : "Mis Listas"}</h3>
        {/* El botón alterna la vista */}
        <button onClick={alternarLista}>
          {modoVista === "crear" ? "Mis Listas" : "Crear Lista"}
        </button>
      </div>

      {/* Se muestra el componente correspondiente según la vista */}
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

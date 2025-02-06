// MisListas.jsx
import React, { useState,useContext } from "react";
import CrearLista from "./CrearLista.jsx";
import UsuarioListas from "./UsuarioListas.jsx";
import { contextoListas } from "../../../../contextos/ListasContexto.jsx";

import "./MisListas.css";

const MisListas = () => {

  // Estado para controlar la vista actual: "crear" o "listas"
  const [viewMode, setViewMode] = useState("crear");

  // Función para alternar la vista entre CrearLista y ListasView
  const toggleView = () => {
    if (viewMode === "listas") {
      resetearAlimentos(); // Se ejecuta solo cuando pasamos de "listas" a "crear"
    }
    setViewMode((prevMode) => (prevMode === "crear" ? "listas" : "crear"));
  };

  const {
    resetearAlimentos,
  } = useContext(contextoListas);


  return (
    <div className="mis-listas">
      <div className="lista-cabeza">
        {/* Cambiar el título según la vista */}
        <h3>{viewMode === "crear" ? "Crear Nueva Lista" : "Mis Listas"}</h3>
        {/* El botón alterna la vista */}
        <button onClick={toggleView}>
          {viewMode === "crear" ? "Listas" : "Crear Lista"}
        </button>
      </div>

      {/* Se muestra el componente correspondiente según la vista */}
      <div className="crear-lista-container">
        {viewMode === "crear" ? (
          <CrearLista />
        ) : (
          <UsuarioListas />
        )}
      </div>
    </div>
  );
};

export default MisListas;

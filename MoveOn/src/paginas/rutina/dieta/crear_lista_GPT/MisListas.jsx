// MisListas.jsx
import React, { useState } from "react";
import CrearLista from "./CrearLista.jsx";
import ListasView from "./ListasView.jsx";
import "./MisListas.css";

const MisListas = () => {
  // Estado para refrescar el listado de listas
  const [refreshSignal, setRefreshSignal] = useState(false);

  // Función para forzar la actualización del listado
  const refrescarListas = () => {
    setRefreshSignal((prev) => !prev);
  };

  return (
    <div className="mis-listas">
      <div className="crear-lista-container">
        <CrearLista refrescarListas={refrescarListas} />
      </div>
      <div className="listas-view-container">
        {/*<ListasView refrescarSignal={refreshSignal} />*/}
      </div>
    </div>
  );
};

export default MisListas;

import React from "react";
import useAppContext from "../../../../../hooks/useAppContext.jsx";
import "./CrearLista.css";

const CrearLista = () => {
  const { listas } = useAppContext();
  const { nombrarListado, nombreLista } = listas;

  return (
    <div className="lista-campo">
      <label>Nombre:</label>
      <input
        type="text"
        placeholder="Ingresa el nombre de la lista"
        value={nombreLista}
        onChange={(e) => nombrarListado(e.target.value)}
      />
    </div>
  );
};

export default CrearLista;

import React, { useContext } from "react";
import { contextoListas } from "../../../../../contextos/ListasContexto";
import "./CrearLista.css";

const CrearLista = () => {
  const {
    nombrarListado,
    nombreLista,
  } = useContext(contextoListas);

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

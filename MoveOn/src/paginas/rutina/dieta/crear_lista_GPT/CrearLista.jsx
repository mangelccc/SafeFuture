// src/paginas/rutina/dieta/crear_lista_GPT/CrearLista.jsx
import React, { useContext } from "react";
import { contextoListas } from "../../../../contextos/ListasContexto";
import AlimentoListado from "./AlimentoListado";
import "./CrearLista.css";

const CrearLista = () => {
  const {
    sumarAlimento,
    restarAlimento,
    createLista,
    nombrarListado,
    nombreLista,
    alimentosLista,
  } = useContext(contextoListas);

  return (
    <div className="crear-lista">
      <div className="lista-campo">
        <label>Nombre:</label>
        <input
          type="text"
          placeholder="Ingresa el nombre de la lista"
          value={nombreLista}
          onChange={(e) => nombrarListado(e.target.value)}
        />
      </div>

      <div className="lista-alimento-seleccionados">
        <AlimentoListado
          nombreLista={nombreLista}
          alimentosLista={alimentosLista}
          sumarAlimento={sumarAlimento}
          restarAlimento={restarAlimento}
        />
      </div>

      <button onClick={createLista} className="crear-btn">
        Crear Lista
      </button>
    </div>
  );
};

export default CrearLista;

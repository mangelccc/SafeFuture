// CrearLista.jsx
import React, { useContext } from "react";
import { contextoListas } from "../../../../contextos/ListasContexto";

import "./CrearLista.css";

const CrearLista = () => {
  const {
    sumarAlimento,
    restarAlimento,
    createLista,
    nombrarListado,
    nombreLista,
    alimentosSeleccionados,
  } = useContext(contextoListas);

  return (
    <div className="crear-lista">
      <div className="lista-cabeza">
        <h3>Crear Nueva Lista</h3>
        <button>Listas</button>
      </div>
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
        <h3>Alimentos Seleccionados</h3>
          {alimentosSeleccionados.map((alimentosSeleccionado) => (
            <div key={alimentosSeleccionado.alimento.id} className="alimento-seleccionado">
              <img src={alimentosSeleccionado.alimento.imagen_url}></img>
              <p>{alimentosSeleccionado.alimento.nombre}</p>
              <p>{alimentosSeleccionado.alimento.peso_kg} KG</p>
              <p>{alimentosSeleccionado.alimento.precio_euros} $</p>
              <div className="alimento-selecionado-botones">
              {alimentosSeleccionado.quantity}
              <button onClick={() => sumarAlimento(alimentosSeleccionado.alimento.id)}>+</button>
              <button onClick={() => restarAlimento(alimentosSeleccionado.alimento.id)}>-</button>
              </div>
            </div>
          ))}
      </div>

      <button onClick={createLista} className="crear-btn">
        Crear Lista
      </button>
    </div>
  );
};

export default CrearLista;

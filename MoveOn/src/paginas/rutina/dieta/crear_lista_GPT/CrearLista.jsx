// CrearLista.jsx
import React, { useContext } from "react";

import "./CrearLista.css";

const CrearLista = ({ refrescarListas }) => {
  const {
    sumarAlimento,
    restarAlimento,
    eliminarAlimentoLista,
    createLista,
    setNombreLista
  } = useContext(contextoListas);

  return (
    <div className="crear-lista">
      <h2>Crear Nueva Lista</h2>
      {error && <p className="error">{error}</p>}
      {mensaje && <p className="exito">{mensaje}</p>}
      <div className="campo">
        <label>Nombre de la lista:</label>
        <input
          type="text"
          placeholder="Ingresa el nombre de la lista"
          value={nombreLista}
          onChange={(e) => setNombreLista(e.target.value)}
        />
      </div>


      <div className="seleccionados">
        <h3>Alimentos Seleccionados</h3>
        <ul>
          {alimentosSeleccionados.map((item) => (
            <li key={item.alimento.id}>
              {item.alimento.nombre} - Cantidad: {item.quantity}{" "}
              <button onClick={() => sumarAlimento(item.alimento.id)}>+</button>
              <button onClick={() => restarAlimento(item.alimento.id)}>-</button>
              <button onClick={() => eliminarAlimentoLista(item.alimento.id)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={createLista} className="crear-btn">
        Crear Lista
      </button>
    </div>
  );
};

export default CrearLista;

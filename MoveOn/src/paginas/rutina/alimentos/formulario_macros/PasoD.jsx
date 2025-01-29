import React from "react";
import "./Paso.css";

const PasoD = ({ formularioData, cambiarFormulario, terminarFormulario, anteriorPaso }) => {
  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Paso B</h2>

      <div className="pasoA-fieldContainer">
        <label className="pasoA-label">Objetivo</label>
        <select
          name="actividad"
          value={formularioData.actividad}
          onChange={(e) => cambiarFormulario(e)}
          className="pasoA-input"
        >
          <option value="" disabled>Selecciona tu opción</option>
          <option value="perder">Perder peso</option>
          <option value="mantener">Mantener peso</option>
          <option value="ganar">Ganar masa muscular</option>
        </select>
      </div>

      <div className="pasoB-buttonContainer">
        <button className="pasoA-button-anterior" onClick={anteriorPaso}>
          Anterior
        </button>
        <button className="pasoA-button" onClick={terminarFormulario}>
          Terminar
        </button>
      </div>
    </div>
  );
};

export default PasoD;

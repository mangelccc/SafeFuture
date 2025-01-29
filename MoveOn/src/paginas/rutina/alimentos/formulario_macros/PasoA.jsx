import React from "react";
import "./Paso.css";

const PasoA = ({ formularioData, cambiarFormulario, siguientePaso }) => {
  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Paso A</h2>

      <div className="pasoA-fieldContainer">
        <label className="pasoA-label">Peso</label>
        <input
          type="number"
          name="peso"
          value={formularioData.peso}
          onChange={(e) => cambiarFormulario(e)}
          placeholder="Peso"
          className="pasoA-input"
        />
      </div>

      <div className="pasoA-fieldContainer">
        <label className="pasoA-label">Altura</label>
        <input
          type="number"
          name="altura"
          value={formularioData.altura}
          onChange={(e) => cambiarFormulario(e)}
          placeholder="Altura"
          className="pasoA-input"
        />
      </div>

      <div className="pasoA-buttonContainer">
        <button className="pasoA-button" onClick={siguientePaso}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default PasoA;

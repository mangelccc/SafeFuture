import React from "react";
import "./Paso.css";

const PasoB = ({ formularioData, cambiarFormulario, siguientePaso, anteriorPaso }) => {
  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Paso B</h2>

      <div className="pasoA-fieldContainer">
        <label className="pasoA-label">Edad</label>
        <input
          type="number"
          name="edad"
          value={formularioData.edad}
          onChange={(e) => cambiarFormulario(e)}
          placeholder="Edad"
          className="pasoA-input"
        />
      </div>

      <div className="pasoA-fieldContainer">
        <label className="pasoA-label">Sexo</label>
        <select
          name="sexo"
          value={formularioData.sexo}
          onChange={(e) => cambiarFormulario(e)}
          className="pasoA-input"
        >
          <option value="" disabled>Selecciona tu opción</option>
          <option value="hombre">Hobre</option>
          <option value="mujer">Mujer</option>
        </select>
      </div>

      <div className="pasoB-buttonContainer">
        <button className="pasoA-button-anterior" onClick={anteriorPaso}>
          Anterior
        </button>
        <button className="pasoA-button" onClick={siguientePaso}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default PasoB;

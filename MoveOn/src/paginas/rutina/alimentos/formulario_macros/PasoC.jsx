import React from "react";
import "./Paso.css";

const PasoC = ({ formularioData, cambiarFormulario, siguientePaso, anteriorPaso }) => {
  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Paso B</h2>

      <div className="pasoA-fieldContainer">
        <label className="pasoA-label">Nivel de actividad</label>
        <select
          name="actividad"
          value={formularioData.actividad}
          onChange={(e) => cambiarFormulario(e)}
          className="pasoA-input"
        >
          <option value="" disabled>Selecciona tu opción</option>
          <option value="sedentario">Sedentario</option>
          <option value="ligero">Ligero (1-3 días/semana)</option>
          <option value="moderado">Moderado (3-5 días/semana)</option>
          <option value="activo">Activo (6-7 días/semana)</option>
          <option value="muy-activo">Muy activo / Extra activo</option>
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

export default PasoC;

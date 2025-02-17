import React, { useContext } from "react";
import { contextoMacros } from "../../../../contextos/MacrosContexto.jsx";
import "./Paso.css";

const PasoD = () => {

  const {
    formularioData, 
    cambiarFormulario, 
    terminarFormulario, 
    anteriorPaso
  } = useContext(contextoMacros);

  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Paso D</h2>

      <div className="pasoA-fieldContainer">
        <label className="pasoA-label">Objetivo</label>
        <select
          name="objetivo"
          value={formularioData.objetivo}
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

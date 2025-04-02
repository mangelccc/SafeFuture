import React from "react";
import useAppContext from '../../../../hooks/useAppContext.jsx';
import "./Paso.css";

const PasoD = () => {

  const { dietas } = useAppContext(); 

  const {
    formularioData, 
    cambiarFormulario, 
    terminarFormulario,
    anteriorPaso,
  } = dietas;

  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Último paso</h2>

      <div className="pasoA-fieldContainer">
        <label className="pasoA-label">Objetivo</label>
        <select
          name="objetivo"
          value={formularioData.objetivo}
          onChange={(e) => cambiarFormulario(e)}
          className="pasoA-input"
        >
          <option value="" disabled>Selecciona tu opción</option>
          <option value="Perder">Perder peso</option>
          <option value="Mantener">Mantener peso</option>
          <option value="Ganar">Ganar masa muscular</option>
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

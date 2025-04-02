import React from "react";
import useAppContext from '../../../../hooks/useAppContext.jsx';
import "./Paso.css";

const PasoC = () => {

  const { dietas } = useAppContext(); 

  const {
    formularioData, 
    cambiarFormulario, 
    siguientePaso,
    anteriorPaso,
  } = dietas;

  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Tercer paso</h2>

      <div className="pasoA-fieldContainer">
        <label className="pasoA-label">Nivel de actividad</label>
        <select
          name="actividad"
          value={formularioData.actividad}
          onChange={(e) => cambiarFormulario(e)}
          className="pasoA-input"
        >
          <option value="" disabled>Selecciona tu opción</option>
          <option value="Sedentario">Sedentario</option>
          <option value="Ligero">Ligero (1-3 días/semana)</option>
          <option value="Moderado">Moderado (3-5 días/semana)</option>
          <option value="Activo">Activo (6-7 días/semana)</option>
          <option value="Muy-activo">Muy activo / Extra activo</option>
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

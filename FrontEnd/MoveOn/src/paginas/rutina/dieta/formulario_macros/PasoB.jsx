import React from "react";
import useAppContext from '../../../../hooks/useAppContext.jsx';
import "./Paso.css";

const PasoB = () => {

  const { dietas } = useAppContext(); 

  const {
    formularioData, 
    cambiarFormulario, 
    siguientePaso,
    anteriorPaso,
  } = dietas;
  

  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Segundo paso</h2>
      <form>
      <div className="pasoA-fieldContainer">
        <label className="pasoA-label">Indica tu altura</label>
        <input
          type="number"
          name="altura"
          value={formularioData.altura}
          onChange={(e) => cambiarFormulario(e)}
          placeholder="1.70 (Metros y centímetros)"
          className="pasoA-input"
        />
      </div>
      </form>
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

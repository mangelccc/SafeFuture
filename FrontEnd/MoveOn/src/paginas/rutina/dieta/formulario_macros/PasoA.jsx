import React from "react";
import useAppContext from '../../../../hooks/useAppContext.jsx';
import "./Paso.css";

const PasoA = () => {

  const { dietas } = useAppContext(); 

  const {
    formularioData, 
    cambiarFormulario, 
    siguientePaso
  } = dietas;

  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Primer paso</h2>

        <form>
      <div className="pasoA-fieldContainer">
        <label className="pasoA-label">Indica tu peso actual</label>
        <input
          type="number"
          step="1"
          min="12"
          max="99"
          name="peso"
          value={formularioData.peso}
          onChange={(e) => cambiarFormulario(e)}
          placeholder="75 ( En Kg )"
          className="pasoA-input"
        />
      </div>
      </form>
      

      <div className="pasoA-buttonContainer">
        <button className="pasoA-button" onClick={siguientePaso}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default PasoA;

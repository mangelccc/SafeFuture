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
    erroresFormDietas,
  } = dietas;
  

  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Segundo paso</h2>
      <form>
      <div className="pasoA-fieldContainer">
        <label className="pasoA-label py-2">Indica tu altura</label>
        <input
          type="number"
          name="altura"
          value={formularioData.altura}
          onChange={(e) => cambiarFormulario(e)}
          placeholder="1.70 (Metros y centímetros)"
          className="pasoA-input"
          min="0.50"
          max="2.50"
          step="0.01"
        />
        
        {erroresFormDietas && erroresFormDietas.altura && 
            <p className="text-red-600 py-2">{erroresFormDietas.altura}</p>
          }
      </div>
      </form>
      <div className="pasoB-buttonContainer pt-2">
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

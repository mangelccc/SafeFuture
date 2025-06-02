import React from "react";
import useAppContext from '../../../../hooks/useAppContext.jsx';
import "./Paso.css";

const PasoA = () => {

  const { dietas } = useAppContext();

  const {
    formularioData,
    cambiarFormulario,
    siguientePaso,
    erroresFormDietas
  } = dietas;

  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Primer paso</h2>

      <form>
        <div className="pasoA-fieldContainer">
          <label className="pasoA-label py-2">Indica tu peso actual</label>
          <input
            type="number"
            step="1"
            min="30"
            max="300"
            name="peso"
            value={formularioData.peso}
            onChange={(e) => cambiarFormulario(e)}
            placeholder="75 ( En Kg )"
            className="pasoA-input"
          />
          {/* Mostrar el error si existe */}
          {erroresFormDietas && erroresFormDietas.peso && 
            <p className="text-red-600 py-2">{erroresFormDietas.peso}</p>
          }
        </div>
      </form>


      <div className="pasoA-buttonContainer py-3">
        <button className="pasoA-button" onClick={siguientePaso}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default PasoA;

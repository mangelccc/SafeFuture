import React, { useContext } from "react";
import useAppContext from '../../../../hooks/useAppContext.jsx';


const NumerosPasos = () => {

    const { dietas } = useAppContext();
    const { seleccionarPaso, pasosArray, paso } = dietas;

    return (
      <section className="steps-section">
        {pasosArray.map((letra) => (
          <div
            key={letra}
            className={paso === letra ? "step-circle active" : "step-circle"}
            onClick={() => seleccionarPaso(letra)}
          >
            {letra}
          </div>
        ))}
      </section>
    );
  };
  export default NumerosPasos;
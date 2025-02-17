import React, { useContext } from "react";
import { contextoMacros } from "../../../../contextos/MacrosContexto.jsx";

const NumerosPasos = () => {

    const {
        seleccionarPaso,
        pasosArray,
        paso
    } = useContext(contextoMacros);

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
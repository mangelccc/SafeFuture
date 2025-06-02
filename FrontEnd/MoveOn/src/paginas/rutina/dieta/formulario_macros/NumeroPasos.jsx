import React from "react";
import useAppContext from '../../../../hooks/useAppContext.jsx';

const NumerosPasos = () => {
  const { dietas } = useAppContext();
  const { seleccionarPaso, pasosArray, paso, erroresFormDietas } = dietas;

  const getErrorClase = (letra) => {
    switch (letra) {
      case "A":
        return erroresFormDietas && erroresFormDietas.peso ? "bg-red-600 text-white" : "";
      case "B":
        return erroresFormDietas && erroresFormDietas.altura ? "bg-red-600 text-white" : "";
      case "C":
        return erroresFormDietas && erroresFormDietas.actividad ? "bg-red-600 text-white" : "";
      case "D":
        return erroresFormDietas && erroresFormDietas.objetivo ? "bg-red-600 text-white" : "";
      default:
        return "";
    }
  };

  return (
    <section className="steps-section">
      {pasosArray.map((letra) => (
        <div
          key={letra}
          onClick={() => seleccionarPaso(letra)}
          className={`step-circle ${paso === letra ? "active" : ""} ${getErrorClase(letra)}`}
        >
          {letra}
        </div>
      ))}
    </section>
  );
};

export default NumerosPasos;

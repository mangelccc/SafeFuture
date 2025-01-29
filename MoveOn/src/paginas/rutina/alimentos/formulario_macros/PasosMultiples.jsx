import React, { useState, useEffect } from "react";
import PasoA from "./PasoA.jsx";
import PasoB from "./PasoB.jsx";
import PasoC from "./PasoC.jsx";
import PasoD from "./PasoD.jsx";
import PasoFinal from "./PasoFinal.jsx";
import "./PasosMultiples.css"; 

const iniciaFormulario = {
  peso: 0,
  altura: 0,
  edad: 0,
  sexo: "",
  actividad: "",
  objetivo: "",
};

const pasosArray = ["A", "B", "C", "D"];

const PasosMultiples = (verNumeroPaso) => {
  const [paso, setPaso] = useState("A");
  const [formularioData, setFormularioData] = useState(iniciaFormulario);

  const siguientePaso = () => {
    if (paso === "A") setPaso("B");
    else if (paso === "B") setPaso("C");
    else if (paso === "C") setPaso("D");
  };

  const anteriorPaso = () => {
    if (paso === "D") setPaso("C");
    else if (paso === "C") setPaso("B");
    else if (paso === "B") setPaso("A");
  };

  const cambiarFormulario = (e) => {
    setFormularioData({
      ...formularioData,
      [e.target.name]: e.target.value,
    });
  };

  const terminarFormulario = () => {
    setPaso("final");
  };

  useEffect(() => {
    console.log(formularioData);
  }, [formularioData]);

  const arribaNumerosPasos = () => {
    if (!verNumeroPaso || paso === "final") return null;
    return (
      <section className="steps-section">
        {pasosArray.map((letra) => (
          <div
            key={letra}
            className={paso === letra ? "step-circle active" : "step-circle"}
            onClick={() => setPaso(letra)}
          >
            {letra}
          </div>
        ))}
      </section>
    );
  };

  return (
    <div className="form-container">
      {arribaNumerosPasos()}

      {paso === "A" && 
      <PasoA 
        formularioData={formularioData}
        cambiarFormulario={cambiarFormulario}
        siguientePaso={siguientePaso}
      />}
      {paso === "B" && 
      <PasoB 
        formularioData={formularioData}
        cambiarFormulario={cambiarFormulario}
        siguientePaso={siguientePaso}
        anteriorPaso={anteriorPaso}
      />}
      {paso === "C" && 
      <PasoC 
        formularioData={formularioData}
        cambiarFormulario={cambiarFormulario}
        siguientePaso={siguientePaso}
        anteriorPaso={anteriorPaso}
      />}
      {paso === "D" && 
      <PasoD 
        formularioData={formularioData}
        cambiarFormulario={cambiarFormulario}
        siguientePaso={siguientePaso}
        anteriorPaso={anteriorPaso}
        terminarFormulario={terminarFormulario}
      />}
      {paso === "final" && <PasoFinal />}
    </div>
  );
};

export default PasosMultiples;

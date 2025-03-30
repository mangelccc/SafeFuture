import React from "react";
import NumerosPasos from "./NumeroPasos.jsx";
import PasoA from "./PasoA.jsx";
import PasoB from "./PasoB.jsx";
import PasoC from "./PasoC.jsx";
import PasoD from "./PasoD.jsx";
import PasoFinal from "./PasoFinal.jsx";

import "./PasosMultiples.css"; 

const PasosMultiples = ({paso}) => {

  return (
    <div className="form-container">
      <NumerosPasos/>

      {paso === "A" && <PasoA />}
      {paso === "B" && <PasoB />}
      {paso === "C" && <PasoC />}
      {paso === "D" && <PasoD />}
      {paso === "final" && <PasoFinal />}
    </div>
  );
};

export default PasosMultiples;

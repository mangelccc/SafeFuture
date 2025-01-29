import React from "react";

const Macros = ({hidratos,grasas,proteinas,calorias}) => {

  return (
    <>
      <div className="alimento-macros">
            <p>H: {hidratos}</p>
            <p>G: {grasas}</p>
            <p>P: {proteinas}</p>
            <p>Calorias: {calorias}</p>
      </div>
    </>
  );
};

export default Macros;

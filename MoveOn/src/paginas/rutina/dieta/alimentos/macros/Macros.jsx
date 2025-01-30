import React from "react";

const Macros = ({hidratos,grasas,proteinas,calorias}) => {

  return (
    <>
      <div className="alimento-macros">
          <p><strong>H:</strong> {hidratos}</p>
          <p><strong>G:</strong> {grasas}</p>
          <p><strong>P:</strong> {proteinas}</p>
          <p><strong>Calorias:</strong> {calorias}</p>
      </div>
    </>
  );
};

export default Macros;

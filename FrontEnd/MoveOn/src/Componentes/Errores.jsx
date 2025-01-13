import React from "react";
import "./Errores.css";

const Errores = ({ children }) => {
  return (
    <>
      <div className='errores__error'>{children}</div>
    </>
  );
};

export default Errores;

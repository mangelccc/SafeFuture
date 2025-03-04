import React from "react";
import "./Cuerpo.css";

const Cuerpo = ({ children }) => {
  return (
      <main id='contenido-pagina'>{children}</main>
  );
};

export default Cuerpo;

import React from "react";
import "./Cuerpo.css";

const Cuerpo = ({ children }) => {
  return (
    <>
      <main id="contenido-pagina" className="flex-1 flex flex-col">
        {children}
      </main>
    </>
  );
};

export default Cuerpo;

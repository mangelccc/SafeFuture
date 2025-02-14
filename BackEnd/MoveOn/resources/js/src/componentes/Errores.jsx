import React from "react";
import "./Errores.css";

const Errores = ({ children }) => {
  return (
    <>
      <div className='errores'>
        {Array.isArray(children)
          ? children.map((valor, indice) => {
            return <p key={indice}>{valor}</p>;
          })
          :<p> {children} </p>
        }
      </div>
    </>
  );
};

export default Errores;

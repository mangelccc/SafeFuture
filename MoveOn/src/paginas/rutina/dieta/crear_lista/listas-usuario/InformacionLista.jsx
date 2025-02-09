import React from "react";

const InformacionListas = ({lista}) => {

  return (
            <div className="usuario-lista-resumen">
              <h4>{lista.nombre}</h4>
              <div>
                <button className="ver-lista">Ver</button>
                <button className="eliminar-lista">Eliminar</button>
              </div>
            </div>
  );
};

export default InformacionListas;

import React from "react";
import { precioPorKilo } from "../../../../../bibliotecas/biblioteca.js";
import Macros from "./Macros.jsx";
import "./Alimento.css";

const Alimento = ({ alimento, mostrarMacros, admin }) => {
  return (
    <div className="alimento" data-id={alimento.id}>
      <div className="alimento-img-container">
        <img src={alimento.imagen_url} alt={alimento.nombre} />
      </div>
      <p>
        <strong>Nombre:</strong> {alimento.nombre}
      </p>
      <p>
        <strong>Precio kg/$:</strong> {precioPorKilo(alimento.peso_kg, alimento.precio_euros)}
      </p>
      <div className="admin">
        <button className="macros">Macros</button>
        <button className="anadir">Añadir</button>
        {admin && (
          <>
            <button className="modificar">Modificar</button>
            <button className="eliminar">Eliminar</button>
          </>
        )}
      </div>
      {mostrarMacros && (
        <Macros
          hidratos={alimento.hidratos}
          grasas={alimento.grasas}
          proteinas={alimento.proteinas}
          calorias={alimento.calorias}
        />
      )}
    </div>
  );
};

export default Alimento;

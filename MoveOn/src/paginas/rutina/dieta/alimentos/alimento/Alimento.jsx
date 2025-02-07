import React, { useContext } from "react";
import { contextoAlimentos } from "../../../../../contextos/AlimentosContexto.jsx";
import { precioPorKilo } from "../../../../../bibliotecas/biblioteca.js";
import Macros from "../macros/Macros.jsx";
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
        {/* Botones delegados */}
        <button className="delegated-macros">Macros</button>
        <button className="delegated-anadir">Añadir</button>
        {admin && (
          <>
            <button className="delegated-modificar">Modificar</button>
            <button className="delegated-eliminar">Eliminar</button>
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

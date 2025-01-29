import React from "react";
import Macros from "../macros/Macros.jsx";
import { precioPorKilo } from "../../../../../bibliotecas/biblioteca.js";
import "./Alimento.css";

const Alimento = ({alimento}) => {

  return (
    <>
      <div className="alimento">
        <p>Nombre: {alimento.nombre}</p>
        <img src={alimento.imagen_url} />
        <p>Categoria: {alimento.categoria}</p>
        <p>Precio kg/$: {precioPorKilo(alimento.peso_kg,alimento.precio_euros)}</p>
          <Macros 
            hidratos={alimento.hidratos}
            grasas={alimento.grasas}
            proteinas={alimento.proteinas}
            calorias={alimento.calorias}
          />
      </div>
    </>
  );
};

export default Alimento;

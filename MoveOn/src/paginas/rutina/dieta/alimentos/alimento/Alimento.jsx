import React, {useState,useContext} from "react";
import { contextoAlimentos } from "../../../../../contextos/AlimentosContexto.jsx";
import Macros from "../macros/Macros.jsx";
import { precioPorKilo } from "../../../../../bibliotecas/biblioteca.js";
import "./Alimento.css";

const Alimento = ({alimento}) => {
  const {
    inciarEdicion,
  } = useContext(contextoAlimentos);

  const [mostrarMacros,setMostrarMacros] = useState(false);

  const alternarMostrarMacros = () => {
    setMostrarMacros((prevMostrarMacros) => !prevMostrarMacros);
  }

  return (
    <>
      <div className="alimento">
        <img src={alimento.imagen_url} />
        <p><strong>Nombre:</strong> {alimento.nombre}</p>
        <p><strong>Precio kg/$:</strong> {precioPorKilo(alimento.peso_kg,alimento.precio_euros)}</p>
        <button onClick={alternarMostrarMacros}>Macros</button>
          {mostrarMacros && (
            <Macros 
              hidratos={alimento.hidratos}
              grasas={alimento.grasas}
              proteinas={alimento.proteinas}
              calorias={alimento.calorias}
            />
          )}
          <div className="admin">
            <button onClick={inciarEdicion}></button>
          </div>
      </div>
    </>
  );
};

export default Alimento;

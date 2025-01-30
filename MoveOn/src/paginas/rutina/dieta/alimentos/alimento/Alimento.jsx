import React, {useState,useContext} from "react";
import { contextoAlimentos } from "../../../../../contextos/AlimentosContexto.jsx";
import Macros from "../macros/Macros.jsx";
import { precioPorKilo } from "../../../../../bibliotecas/biblioteca.js";
import "./Alimento.css";

const Alimento = ({alimento}) => {
  const {
    iniciarEdicion,
  } = useContext(contextoAlimentos);

  const [mostrarMacros,setMostrarMacros] = useState(false);

  const alternarMostrarMacros = () => {
    setMostrarMacros((prevMostrarMacros) => !prevMostrarMacros);
  }

  return (
    <>
      <div className="alimento" key={alimento.id}>
      <div class="alimento-img-container">
        <img src={alimento.imagen_url} />
        </div>
        <p><strong>Nombre:</strong> {alimento.nombre}</p>
        <p><strong>Precio kg/$:</strong> {precioPorKilo(alimento.peso_kg,alimento.precio_euros)}</p>
          <div className="admin">
          <button onClick={() => 
            iniciarEdicion(alimento)
            }>Modificar</button>
            <button onClick={alternarMostrarMacros}>Macros</button>
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
    </>
  );
};

export default Alimento;

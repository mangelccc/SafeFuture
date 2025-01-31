// Alimentos.jsx
import React, { useContext } from "react";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";
import Alimento from "../alimentos/alimento/Alimento.jsx";
import AlimentoModificableAdm from "../administracion/AlimentoModificableAdm.jsx";
import "./Alimentos.css";

const Alimentos = () => {
  const { alimentosVisibles, alimentoEditando,deleteAlimento } = useContext(contextoAlimentos);

  return (
    <div className="contenedor-alimentos" 
    onClick={(e) => {
        if (e.target.classList.contains("alimento")) {
          const aceptado = confirm(
            `¿Desea borrar al feo ${e.target.innerHTML}?`
          );
          if (aceptado) {
            deleteAlimento(e.target.id);
          }
        }
      } 
    }
    >
      {alimentosVisibles.map((alimento) =>
        alimentoEditando === alimento.id ? (
          <AlimentoModificableAdm
            key={alimento.id}
            alimento={alimento}
          />
        ) : (
          <Alimento
            key={alimento.id}
            alimento={alimento}
          />
        )
      )}
    </div>
  );
};

export default Alimentos;

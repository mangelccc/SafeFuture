import React, { useContext } from "react";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";
import Alimento from "../alimentos/alimento/Alimento.jsx";
import "./Alimentos.css";

const Alimentos = () => {
    const { listadoAlimentos, readAlimentos } = useContext(contextoAlimentos);

    console.log("Lista de alimentos:", listadoAlimentos);

    return (
        <div className="alimentos-container">
            {listadoAlimentos.length > 0 ? (
                listadoAlimentos.map((item) => (
                    <Alimento key={item.id} alimento={item} />
                ))
            ) : (
                <p>Cargando alimentos...</p>
            )}
        </div>
    );
};

export default Alimentos;

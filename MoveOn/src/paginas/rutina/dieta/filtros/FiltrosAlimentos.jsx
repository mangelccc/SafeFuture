import React, { useContext } from "react";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";
import "./FiltrosAlimentos.css";

const FiltrosAlimentos = () => {
    const {
        ordenarAlimentos,
        filtrarAlimentos
    } = useContext(contextoAlimentos);

    return (
        <>
            <div className="contenedor-filtros">
                <div className="filtros-botones">
                    <button onClick={() => ordenarAlimentos("nombre")}>Ordenar por Nombre</button>
                    <button onClick={() => ordenarAlimentos("peso")}>Ordenar por Peso</button>
                    <button onClick={() => ordenarAlimentos("precio")}>Ordenar por Precio</button>
                </div>
                <div className="filtros-busqueda">
                <input
                        type="text"
                        placeholder="Filtrar por nombre"
                        onChange={(e) => filtrarAlimentos(e.target.value)}
                    />
                </div>
            </div>
        </>
    );
};

export default FiltrosAlimentos;

import React, { useContext } from "react";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";
import "./FiltrosAlimentos.css";

const FiltrosAlimentos = () => {
    const { 
                ordenarPorNombre,
                ordenarPorPrecio,
                ordenarPorPeso,
                datosFormulario,
            } = useContext(contextoAlimentos);

    return (
        <>
            <div className="contenedor-filtros">
                <div className="filtros-botones">
                    <button onClick={ordenarPorNombre}>Ordenar por Nombre</button>
                    <button onClick={ordenarPorPrecio}>Ordenar por Precio</button>
                    <button onClick={ordenarPorPeso}>Ordenar por Peso</button>
                </div>
                <div className="filtros-busqueda">
                    <input 
                        type="text"
                        name="nombre"
                        placeholder="Buscar alimento..."
                        onChange={(e) => datosFormulario(e)}
                    />
                </div>
            </div>
        </>
    );
};

export default FiltrosAlimentos;

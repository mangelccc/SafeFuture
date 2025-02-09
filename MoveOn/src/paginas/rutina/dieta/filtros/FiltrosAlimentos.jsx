import React, { useContext } from "react";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";
import "./FiltrosAlimentos.css";

const FiltrosAlimentos = () => {
    const {
        ordenarAlimentos,
        filtrarAlimentos,
        alternarAdmin
    } = useContext(contextoAlimentos);

    const manejarClic = (e) => {
        const target = e.target;

        if (
            target.classList.contains("orden-nombre") ||
            target.classList.contains("orden-peso") ||
            target.classList.contains("orden-precio") ||
            target.classList.contains("admin-cambio")
        ) {
            // Determina la acción a realizar según la clase del botón
            if (target.classList.contains("orden-nombre")) {
                ordenarAlimentos("nombre");
            } else if (target.classList.contains("orden-peso")) {
                ordenarAlimentos("peso");
            } else if (target.classList.contains("orden-precio")) {
                ordenarAlimentos("precio");
            } else if (target.classList.contains("admin-cambio")) {
                alternarAdmin();
            }
        }
    };

    return (
        <div className="contenedor-filtros" onClick={manejarClic}>
            <div className="filtros-botones">
                {/* Botones con clases delegadas */}
                <button className="orden-nombre">Ordenar por Nombre</button>
                <button className="orden-peso">Ordenar por Peso</button>
                <button className="orden-precio">Ordenar por Precio</button>
                <button className="admin-cambio">Act/desc. Admin</button>
            </div>
            <div className="filtros-busqueda">
                {/* Este input mantiene su onChange porque requiere interacción directa */}
                <input
                    type="text"
                    placeholder="Filtrar por nombre"
                    onChange={(e) => filtrarAlimentos(e.target.value)}
                />
            </div>
        </div>
    );
};

export default FiltrosAlimentos;

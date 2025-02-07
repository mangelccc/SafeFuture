import React, { useContext } from "react";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";
import "./FiltrosAlimentos.css";

const FiltrosAlimentos = () => {
    const {
        ordenarAlimentos,
        filtrarAlimentos,
        alternarAdmin
    } = useContext(contextoAlimentos);

    // Manejador único de clics con delegación de eventos
    const manejarClic = (e) => {
        const target = e.target;

        if (
            target.classList.contains("delegated-orden-nombre") ||
            target.classList.contains("delegated-orden-peso") ||
            target.classList.contains("delegated-orden-precio") ||
            target.classList.contains("delegated-admin-toggle")
        ) {
            // Determina la acción a realizar según la clase del botón
            if (target.classList.contains("delegated-orden-nombre")) {
                ordenarAlimentos("nombre");
            } else if (target.classList.contains("delegated-orden-peso")) {
                ordenarAlimentos("peso");
            } else if (target.classList.contains("delegated-orden-precio")) {
                ordenarAlimentos("precio");
            } else if (target.classList.contains("delegated-admin-toggle")) {
                alternarAdmin();
            }
        }
    };

    return (
        <div className="contenedor-filtros" onClick={manejarClic}>
            <div className="filtros-botones">
                {/* Botones con clases delegadas */}
                <button className="delegated-orden-nombre">Ordenar por Nombre</button>
                <button className="delegated-orden-peso">Ordenar por Peso</button>
                <button className="delegated-orden-precio">Ordenar por Precio</button>
                <button className="delegated-admin-toggle">Act/desc. Admin</button>
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

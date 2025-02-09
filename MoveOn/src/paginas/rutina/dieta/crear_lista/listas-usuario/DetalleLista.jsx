import React, { useContext } from "react";
import { contextoListas } from "../../../../../contextos/ListasContexto";
import AlimentosEnLista from "../alimentos-elementos/AlimentosEnLista.jsx";

const UsuarioListas = ({lista}) => {
    const {
        listaEnEdicion,
        alimentosEdicion,
        sumarAlimentoEdicion,
        restarAlimentoEdicion,
    } = useContext(contextoListas);

    return (
        <>
            {listaEnEdicion && listaEnEdicion.id === lista.id && (
                <div className="lista-alimento-seleccionados">
                    <AlimentosEnLista
                        alimentosLista={alimentosEdicion}
                        sumarAlimento={sumarAlimentoEdicion}
                        restarAlimento={restarAlimentoEdicion}
                    />
                    <button className="actualizar-lista">
                        Actualizar
                    </button>
                </div>
            )}
        </>
    );
};

export default UsuarioListas;

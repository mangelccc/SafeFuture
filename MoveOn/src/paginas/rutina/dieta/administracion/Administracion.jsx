// Alimentos.jsx
import React, { useContext } from "react";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";
import Alimentos from "../alimentos/Alimentos.jsx";

const Administracion = () => {

    const {
        createAlimento,
        readAlimentos,
        updateAlimento,
        deleteAlimento,
    } = useContext(contextoAlimentos);

    return (
        <>
            <p>Esto solo lo veran los administradores</p>
        </>
    );
};

export default Administracion;

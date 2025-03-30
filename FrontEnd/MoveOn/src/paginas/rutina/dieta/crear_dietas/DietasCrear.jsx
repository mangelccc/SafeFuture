import React, { useContext } from 'react';
import DietasGuardar from './DietasGuardar.jsx';
import PasosMultiples from "../formulario_macros/PasosMultiples.jsx";
import useAppContext from '../../../../hooks/useAppContext.jsx';

const DietasCrear = () => {
    const { dietas } = useAppContext(); // Asegúrate de exponer dietaCreada en tu contexto
    const { dietaCreada, paso } = dietas;

    return (
        <>
            {(dietaCreada || true)
                ? <PasosMultiples paso={paso} /* dietaId={dietaCreada.id} */ /> // Pasas el id a tu siguiente formulario
                : <DietasGuardar />
            }
        </>
    )
}

export default DietasCrear;

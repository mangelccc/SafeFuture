import React from 'react';
import DietasGuardar from './DietasGuardar.jsx';
import PasosMultiples from "../formulario_macros/PasosMultiples.jsx";
import useAppContext from '../../../../hooks/useAppContext.jsx';
import { useEffect } from 'react';

const DietasCrear = () => {
    const { dietas } = useAppContext(); 
    const { guardarDieta, paso, establecerNuevaDieta } = dietas;

    useEffect(()=>{
        establecerNuevaDieta();
    },[]);

    return (
        <>
            {guardarDieta
                ? <PasosMultiples paso={paso} /> 
                : <DietasGuardar />
            }
        </>
    )
}

export default DietasCrear;

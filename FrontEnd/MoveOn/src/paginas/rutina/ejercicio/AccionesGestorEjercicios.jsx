import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAppContext from "../../../hooks/useAppContext.jsx";
import FormularioEjercicio from './FormularioEjercicio.jsx';

const AccionesGestorEjercicios = () => {

    const navigate = useNavigate();
    const { ejerciciosContex } = useAppContext();
    const { filtrarEjercicios } = ejerciciosContex;
    return (
        <div className='flex flex-col items-start justify-start'>
            <h2 className='pb-4 dark:text-white'>
                <strong>Ejercicios</strong>
            </h2>

            <div className='flex flex-row w-full space-x-4 justify-between items-center mb-4'>
                <input
                    type="text"
                    placeholder="Filtrar por nombre"
                    className="rounded bg-white dark:bg-black px-2 border-2
                    border-black p-2 outline-none focus:border-purple transition duration-300 dark:text-white"
                    onChange={(e) => filtrarEjercicios(e.target.value)}
                />
                <FormularioEjercicio />
            </div>
        </div>
    )
}

export default AccionesGestorEjercicios;

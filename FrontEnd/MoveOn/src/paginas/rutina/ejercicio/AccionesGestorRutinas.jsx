import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAppContext from "../../../hooks/useAppContext.jsx";

const AccionesGestorRutinas = () => {

    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-start justify-start'>
            <h2 className='pb-4 dark:text-white'>
                <strong>Entrenamientos</strong>
            </h2>

            <div className='flex flex-row w-full space-x-4 justify-between items-center mb-4'>
                <input
                    type="text"
                    placeholder="Filtrar por nombre"
                    className="rounded bg-white dark:bg-black px-2 border-2
                    border-black p-2 outline-none focus:border-purple transition duration-300"
                    
                />
                <button
                    className="bg-purple dark:bg-gold text-white2 dark:text-black font-bold px-3 
                    py-1 rounded hover:outline dark:hover:outline-3 outline-gold dark:outline-purple"
                    onClick={() => {
                        navigate("/rutina/ejercicio/crear-entrenamiento");
                    }
                    }
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default AccionesGestorRutinas;

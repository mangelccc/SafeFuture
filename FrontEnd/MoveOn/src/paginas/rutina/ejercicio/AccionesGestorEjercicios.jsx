import React from 'react'

const AccionesGestorEjercicios = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='pb-4'>
                <strong>Ejercicios</strong>
            </h2>

            <div className='flex flex-row space-x-4'>

                <input className="rounded bg-white dark:bg-black" type="text" value="Buscador" />

                <button className="bg-white dark:bg-black font-bold px-3 py-1 rounded">
                    Buscar
                </button>

            </div>
        </div>
    )
}

export default AccionesGestorEjercicios;

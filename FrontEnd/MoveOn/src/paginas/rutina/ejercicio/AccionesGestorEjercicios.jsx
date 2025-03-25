import React from 'react'

const AccionesGestorEjercicios = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='pb-4'>
                <strong>Ejercicios</strong>
            </h2>

            <div className='flex flex-row space-x-4'>

                <input className="rounded bg-white dark:bg-black px-2 border-2 border-black p-2 outline-none focus:border-purple transition duration-300" type="text" placeholder="Buscar ejercicio" />

                <button className="bg-purple dark:bg-gold text-white2 dark:text-black font-bold px-3 py-1 rounded hover:outline dark:hover:outline-3 outline-gold dark:outline-purple">
                    Buscar
                </button>

            </div>
        </div>
    )
}

export default AccionesGestorEjercicios;

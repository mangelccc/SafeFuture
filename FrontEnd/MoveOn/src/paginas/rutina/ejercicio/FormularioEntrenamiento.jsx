import React, { useState } from 'react'
import { SearchBar } from "./buscador/SearchBar";
import { SearchResultsList } from "./buscador/SearchResultsList";
import Ejercicio from "./Ejercicio";

function FormularioEntrenamiento() {
    const [results, setResults] = useState([]);

    return (
        <div className="flex flex-col items-baseline justify-center w-full gap-[50px]">
            <form className='w-full flex flex-row justify-between'>
                {/* Nombre */}
                <div>
                    <label htmlFor="nombre" className="">
                        Nombre:
                    </label>
                    <br />
                    <input
                        name="nombre"
                        type="text"
                        placeholder="Escribe tu nombre."
                        className="rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black outline-none focus:ring-2 focus:ring-purple dark:focus:ring-gold transition duration-300"
                    />

                </div>

                {/* Descripción */}
                <div>
                    <label htmlFor="descripcion" className="">
                        Descripción:
                    </label>
                    <br />
                    <input
                        name="descripcion"
                        type="text"
                        placeholder="Escribe la descripción."
                        className="rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black outline-none focus:ring-2 focus:ring-purple dark:focus:ring-gold transition duration-300"
                    />
                </div>
            </form>
            <div className="search-bar-container h-full w-full flex">
                <div className="w-1/2">
                    <SearchBar setResults={setResults} />
                    {results && results.length > 0 && <SearchResultsList results={results} />}
                </div>
                <div className="w-1/2">
                    <p>eeeee</p>
                </div>
            </div>


        </div>
    )
}

export default FormularioEntrenamiento

/* FormularioEntrenamiento.jsx */
import React, { useState } from 'react';
import Ejercicio from './Ejercicio';
import { SearchBar } from './buscador/SearchBar';
import { SearchResultsList } from './buscador/SearchResultsList';

function FormularioEntrenamiento() {
    const [results, setResults] = useState([]);
    const [selectedEjercicios, setSelectedEjercicios] = useState([]);

    const handleSelect = (ejercicio) => {
        // Avoid adding duplicates
        setSelectedEjercicios((prev) =>
            prev.some((e) => e.id_ejercicio === ejercicio.id_ejercicio)
                ? prev
                : [...prev, ejercicio]
        );
    };

    return (
        <div className="flex flex-col items-baseline justify-center w-full gap-[50px]">
            <form className="w-full flex flex-row justify-between">
                {/* Nombre */}
                <div>
                    <label htmlFor="nombre">Nombre:</label><br />
                    <input
                        name="nombre"
                        type="text"
                        placeholder="Escribe tu nombre."
                        className="rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black outline-none focus:ring-2 focus:ring-purple dark:focus:ring-gold transition duration-300"
                    />
                </div>

                {/* Descripción */}
                <div>
                    <label htmlFor="descripcion">Descripción:</label><br />
                    <input
                        name="descripcion"
                        type="text"
                        placeholder="Escribe la descripción."
                        className="rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black outline-none focus:ring-2 focus:ring-purple dark:focus:ring-gold transition duration-300"
                    />
                </div>
            </form>

            <div className="search-bar-container h-full w-full flex justify-between gap-1">
                <div className="w-[40%]">
                    <SearchBar setResults={setResults} />
                    {results.length > 0 && (
                        <SearchResultsList
                            results={results}
                            onSelect={handleSelect}
                        />
                    )}
                </div>

                <div className="w-[60%] max-h-[360px] overflow-y-auto flex flex-col items-center justify-start border border-gray-300 rounded-lg p-2">
                    <h2><strong>Ejercicios Seleccionados:</strong></h2>
                    {selectedEjercicios.map((ej) => (
                        <Ejercicio
                            key={ej.id_ejercicio}
                            nombre={ej.nombre}
                            descripcion={ej.descripcion}
                            grupoMuscular={ej.grupoMuscular}
                            imagen={ej.imagen}
                            video={ej.video}
                        />
                    ))}
                </div>

            </div>

        </div>
    );
}

export default FormularioEntrenamiento;

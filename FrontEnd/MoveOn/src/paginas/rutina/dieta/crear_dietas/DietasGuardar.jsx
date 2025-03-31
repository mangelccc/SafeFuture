import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Errores from '../ErroresDietas.jsx';

import useAppContext from '../../../../hooks/useAppContext.jsx';

const DietasGuardar = () => {

    const { dietas } = useAppContext();
    const { actualizarFormDieta,
        validarDieta,
        nuevaDieta,
        errorDietas,
        crearDieta,
        restablecerErroresDietas } = dietas;


    useEffect(() =>{
        restablecerErroresDietas();
    },[])

    return (
        <section className="flex flex-col items-center justify-center gap-5 p-5 bg-[#1e1e1e] border-2 border-[#259463] rounded-lg shadow-lg max-w-xl mx-auto my-12">
    <div>
        <h2 className="text-[#259463] text-3xl text-center px-4">Crear una nueva lista</h2>
        <form id="crear-lista" className="flex flex-col gap-4 w-full pt-4">
            <label htmlFor="nombre" className="text-lg text-[#d4d4d4] font-bold text-center">
                Elige el nombre de tu dieta:
            </label>
            <input
                name="nombre"
                type="text"
                placeholder="Dieta Calórica"
                className="self-center w-full p-2.5 bg-[#2c2c2c] border-2 border-[#259463] rounded-lg text-lg text-white outline-none transition-all duration-300 placeholder:text-[#7a7a7a] focus:border-[#1a6e48] focus:shadow-md"
                onChange={(e) => {
                    actualizarFormDieta(e);
                }}
            />
            <label htmlFor="descripcion" className="text-lg text-[#d4d4d4] font-bold text-center">
                Descripción de la dieta:
            </label>
            <input
                name="descripcion"
                type="text"
                placeholder="Muchos carbohidratos"
                className="self-center w-full p-2.5 bg-[#2c2c2c] border-2 border-[#259463] rounded-lg text-lg text-white outline-none transition-all duration-300 placeholder:text-[#7a7a7a] focus:border-[#1a6e48] focus:shadow-md"
                onChange={(e) => {
                    actualizarFormDieta(e);
                }}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    if (validarDieta(e)) {
                        crearDieta();
                    }
                }}
                className="bg-[#259463] text-white text-lg font-bold py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#1a6e48] hover:shadow-lg"
            >
                Crear dieta
            </button>
        </form>
        {errorDietas && <Errores>{errorDietas}</Errores>}
    </div>
    <div>
        <Link to="/rutina/dietas">
            <button className="bg-[#212121] text-[#259463] border-2 border-[#259463] transition-all duration-300 hover:bg-[#259463] hover:text-white px-2 py-1 rounded-md">
                Volver a tus dietas
            </button>
        </Link>
    </div>
</section>

    )
}

export default DietasGuardar;
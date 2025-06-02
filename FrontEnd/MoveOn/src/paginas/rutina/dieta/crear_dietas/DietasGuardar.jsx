import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Errores from '../ErroresDietas.jsx';

import useAppContext from '../../../../hooks/useAppContext.jsx';

const DietasGuardar = () => {

    const { dietas } = useAppContext();
    const { actualizarFormDieta,
        validarDieta,
        errorDietas,
        crearIdDieta,
        restablecerErroresDietas } = dietas;


    useEffect(() =>{
        restablecerErroresDietas();
    },[])

    return (
        <section className="flex flex-col items-center justify-center gap-5 py-5 px-10 hsm:px-4 bg-white3 dark:bg-black1 border-y-2 border-purple sm:rounded-lg shadow-lg max-w-xl mx-auto my-12">
    <div>
        <h2 className="dark:text-gold text-3xl text-center px-4">Crear una nueva dieta</h2>
        <form id="crear-lista" className="flex flex-col gap-5 w-full pt-4">
            <label htmlFor="nombre" className="text-lg dark:text-white font-bold text-center">
                Elige el nombre de tu dieta:
            </label>
            <input
                name="nombre"
                type="text"
                placeholder="Dieta Calórica"
                className="self-center w-full p-2.5 bg-[#2c2c2c] border-2 border-purple rounded-lg text-lg text-white outline-none transition-all duration-300 placeholder:text-[#7a7a7a] focus:border-turq focus:shadow-md"
                onChange={(e) => {
                    actualizarFormDieta(e);
                }}
            />
            <label htmlFor="descripcion" className="text-lg dark:text-white font-bold text-center">
                Descripción de la dieta:
            </label>
            <input
                name="descripcion"
                type="text"
                placeholder="Muchos carbohidratos"
                className="self-center w-full p-2.5 bg-[#2c2c2c] border-2 border-purple rounded-lg text-lg text-white outline-none transition-all duration-300 placeholder:text-[#7a7a7a] focus:border-turq focus:shadow-md"
                onChange={(e) => {
                    actualizarFormDieta(e);
                }}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    if (validarDieta(e)) {
                        crearIdDieta();
                    }
                }}
                className="bg-gold dark:text-black text-lg font-bold py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-turq hover:shadow-lg"
            >
                Crear dieta
            </button>
        </form>
        {errorDietas && <Errores>{errorDietas}</Errores>}
    </div>
    <div>
        <Link to="/rutina/dietas">
            <button className="bg-purple text-white font-bold border-2 transition-all duration-300 hover:bg-turq hover:border-turq hover:text-black px-2 py-1 rounded-md">
                Volver a tus dietas
            </button>
        </Link>
    </div>
</section>

    )
}

export default DietasGuardar;
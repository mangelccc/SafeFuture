import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import DietasUsuario from './DietasUsuario.jsx';
import useAppContext from '../../../hooks/useAppContext.jsx'; 

const DietasGestion = () => {
    const { dietas, auth } = useAppContext();
    const { dietasUsuario, eliminarDieta } = dietas;
    const { sesionIniciada } = auth;
    const navegar = useNavigate();
    useEffect(() => {
        if (!sesionIniciada) {
          navegar("/usuario");
        }
      }, []);

    return (
        <>
            <section className='mx-10 my-2 flex sm:justify-between hsm:flex-col hsm:gap-8 sm:gap-14'>
                <div>
                    <h2 className='p-0 pb-4 dark:text-gold underline underline-offset-3 decoration-purple dark:decoration-turq '>Tus Dietas</h2>
                    <p className='dark:text-gold'>Añade los alimentos que te gusten ajustándote a los macros que te recomendamos.😊 </p>
                    {dietasUsuario.length !== 0 &&
                    <>
                        <p className='dark:text-gold pt-4'>Utiliza los iconos para editar, ver o borrar una dieta.</p>
                    </>}
                </div>
                <div className='hsm:w-full hsm:self-center sm:self-end'>
                    <Link to="/rutina/dietas-crear">
                        <button className='mt-5 bg-black1 border-0 text-white dark:text-black dark:bg-white2 rounded-xl py-3 px-6 font-semibold transition ease-in-out duration-200 cursor-pointer hover:bg-gold dark:hover:bg-gold hover:text-black1 hover:-translate-y-1.5 hover:border-2 border-black dark:border-purple active:translate-y-1 active:bg-gold hsm:w-full'> Crear nueva dieta </button>
                    </Link>
                </div>

            </section>
            <section className='dietas-listas m-10 text-center grid hsm:grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10' onClick={eliminarDieta}>

                {dietasUsuario.length && Array.isArray(dietasUsuario)
                    ? dietasUsuario.map((dieta) => {
                        return <DietasUsuario key={dieta.pivot.id_dieta} dieta={dieta} />
                    })
                    : <Link to="/rutina/dietas-crear"><p className='border-2 border-gold dark:border-purple bg-purple dark:bg-black rounded-xl px-10 py-5 text-white'>Aún no tienes ninguna dieta, crea una dieta ahora</p></Link>}
            </section>
            
        </>
    )
}

export default DietasGestion;
import React from 'react';
import { Link } from "react-router-dom";
/* import ListaTarjeta from '../listasCompra/ListaTarjeta.jsx'; */
/* import useContexto from '../../hooks/useContexto.jsx' */

const ListasCompra = () => {

  /* const { listasUsuario } = useContexto("listas"); */
  const listasUsuario = [];

  return (
    <>
    <section className='mx-10 my-2 flex justify-between'>
        <div>
        <h2 className='p-0'>Tus Dietas</h2>
        <p>Haz clic en los iconos laterales para ver detalles de las dietas o eliminarlas.</p>
        </div>
        <div>
            <Link to="/rutina/dietas-crear">
                <button className='mt-5 bg-black1 border-0 text-white dark:text-black dark:bg-white2 rounded-xl  py-3 px-6 font-semibold transition ease-in-out duration-200 cursor-pointer hover:bg-gold dark:hover:bg-gold hover:text-black1 hover:-translate-y-1.5 hover:border-2 border-black dark:border-purple active:translate-y-1 active:bg-gold hsm:center'> Crear nueva dieta </button>
            </Link>
        </div>

    </section>
    <section className='dietas-listas m-10 text-center flex flex-wrap justify-evenly gap-x-20 gap-y-10'>
    
        {listasUsuario.length && Array.isArray(listasUsuario) 
        ? listasUsuario.map((lista) => {
            return {/* <ListaTarjeta key={lista.id_lista} lista={lista}/> */}
        })
        : <Link to="/rutina/dietas-crear"><p className='border border-2 border-gold dark:border-purple bg-purple dark:bg-black rounded-xl px-10 py-5 text-white'>Aún no tienes ninguna dieta, crea una dieta ahora</p></Link> }
        
    </section>
    </>
  )
}

export default ListasCompra;
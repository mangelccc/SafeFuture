import React from 'react';
import { Link } from "react-router-dom";
import borrar from "../../../galeria/imagenes/borrar.png";
import ver from "../../../galeria/imagenes/ver.png";



const DietasUsuario = ({dieta}) => {
    
    return (
      <section className="max-w-lg flex flex-col text-center border-2 border-black dark:border-white rounded-[9px]" id={dieta.id_dieta} data-dieta={dieta.pivot.id_dieta}>
        <div className="flex flex-col rounded-t-lg bg-gradient-to-r from-[#FFBA49] to-[#5001ed] text-shadow-xl">
          <section className="border-b-2 border-black dark:border-white p-2">
            <h3 className=''>{dieta.nombre}</h3>
          </section>
          <section className="p-2 border-b-2 border-black dark:border-white">
            <div className="flex justify-between px-6">
              <p className="py-2 px-2">Tu objetivo:</p>
              <p className="py-2 px-2">{dieta.pivot.objetivo} {dieta.pivot.objetivo === "Ganar" ? "masa" : "peso"}</p>
            </div>
            <div className="lista-tarjeta-contenido">
              <p>Descripción:</p>
              <p>{dieta.descripcion}</p>
            </div>

          </section>
          
        </div>
        <div className="flex justify-around items-center p-3 rounded-b-lg bg-gradient-to-l from-[#000000] via-[#3a3661] to-[#000000]">

          <Link to={`/rutina/dietas/${dieta.pivot.id_dieta}`}>
            <img src={ver} alt='Ver' title="Ver contenido de la lista" className="w-12 my-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"/>
          </Link>
          <img src={borrar} className='del w-12 my-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110' alt='Borrar' title="Borrar la lista actual " />
        </div>
      </section>
    );
}

export default DietasUsuario;
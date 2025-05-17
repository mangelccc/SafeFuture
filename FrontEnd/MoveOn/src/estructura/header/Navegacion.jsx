import React from 'react';
import { Link } from "react-router-dom";
import BotonTema from "./BotonTema.jsx";
import { useTema } from '../../contextos/TemaContexto.jsx';

const Navegacion = ({ menu, alternar }) => {
    const { tema, alternarTema } = useTema();

    return (
        <nav className={`hsm:w-full hsm:py-8 hsm:flex hsm:flex-col hsm:flex-nowrap hsm:justify-center hsm:items-center hsm:hidden ${menu && "activo borde-b hsm:border-b-2"}  border-black dark:border-white`}
            onClick={(evento) => {
                menu && evento.target.tagName === "A" && alternar()
            }}
            
        >
            <ul className="list-none flex gap-5 hsm:gap-8 hsm:flex-col hsm:items-center">
                <li>
                    <Link to="/" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple active:bg-purple hover:text-white active:text-white">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/que-somos" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple active:bg-purple hover:text-white active:text-white">
                        ¿Qué Somos?
                    </Link>
                </li>
                <li>
                    <Link to="/servicios" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple active:bg-purple hover:text-white active:text-white">
                        Servicios
                    </Link>
                </li>
                <li>
                    <Link to="/rutina" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple active:bg-purple hover:text-white active:text-white">
                        Plantea tu rutina
                    </Link>
                </li>

                <li>
                    <Link to="/contacto" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple active:bg-purple hover:text-white active:text-white">
                        Contacto
                    </Link>
                </li>
                {menu &&
                    <li className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white hover:border-2 hover:border-black outline-2 cursor-pointer bg-white3 dark:bg-black2"
                        onClick={alternarTema}>
                        <span className='flex items-center gap-2 ml-4'>
                            <p>Cambiar tema a {tema === "dark" ? "claro" : "oscuro"}</p><BotonTema desactivar={true}/>
                        </span>
                    </li>}
            </ul>
        </nav>
    )
}

export default Navegacion;
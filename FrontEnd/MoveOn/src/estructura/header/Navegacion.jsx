import React from 'react'
import { Link } from "react-router-dom";

const Navegacion = ({ menu, alternar }) => {
    return (
        <nav className={`sm:w-full sm:py-8 sm:flex sm:flex-col sm:flex-nowrap sm:justify-center sm:items-center sm:hidden ${menu && "activo borde-b sm:border-b-2"}  border-black dark:border-white`}
            onClick={(evento) => {
                menu && evento.target.tagName === "A" && alternar()
            }}
        >
            <ul className="list-none flex gap-5 sm:gap-8 sm:flex-col sm:items-center">
                <li>
                    <Link to="/" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white ">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/que-somos" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white ">
                        ¿Qué Somos?
                    </Link>
                </li>
                <li>
                    <Link to="/servicios" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white">
                        Servicios
                    </Link>
                </li>
                <li>
                    <Link to="/rutina" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white">
                        Plantea tu rutina
                    </Link>
                </li>
                <li>
                    <Link to="/foro" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white">
                        Foro
                    </Link>
                </li>
                <li>
                    <Link to="/contactanos" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white">
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navegacion;
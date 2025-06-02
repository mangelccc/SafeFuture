import React from 'react';
import { Link, useLocation } from "react-router-dom";
import BotonTema from "./BotonTema.jsx";
import { useTema } from '../../contextos/TemaContexto.jsx';
import { getEnlaceClase } from "../../bibliotecas/biblioteca.js";

const Navegacion = ({ menu, alternar }) => {
    const { tema, alternarTema } = useTema();
    const location = useLocation();

    return (
        <nav
            className={`hsm:w-full hsm:py-8 hsm:flex hsm:flex-col hsm:flex-nowrap hsm:justify-center hsm:items-center hsm:hidden ${menu && "activo borde-b hsm:border-b-2"} border-black dark:border-white`}
            onClick={(evento) => {
                menu && evento.target.tagName === "A" && alternar();
            }}
        >
            <ul className="list-none flex gap-5 hsm:gap-8 hsm:flex-col hsm:items-center">
                <li><Link to="/" className={getEnlaceClase(location.pathname, "/")}>Inicio</Link></li>
                <li><Link to="/que-somos" className={getEnlaceClase(location.pathname, "/que-somos")}>¿Qué Somos?</Link></li>
                <li><Link to="/servicios" className={getEnlaceClase(location.pathname, "/servicios")}>Servicios</Link></li>
                <li><Link to="/rutina" className={getEnlaceClase(location.pathname, "/rutina")}>Plantea tu rutina</Link></li>
                <li><Link to="/contacto" className={getEnlaceClase(location.pathname, "/contacto")}>Contacto</Link></li>

                {menu && (
                    <li
                        className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white hover:border-2 hover:border-black outline-2 cursor-pointer bg-white3 dark:bg-black2"
                        onClick={alternarTema}
                    >
                        <span className='flex items-center gap-2 ml-4'>
                            <p>Cambiar tema a {tema === "dark" ? "claro" : "oscuro"}</p><BotonTema desactivar={true} />
                        </span>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navegacion;

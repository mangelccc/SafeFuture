import React from 'react';
import { Link } from 'react-router-dom'

const ListaInformacion = () => {
    return (
        <div>
            <h3 className="text-purple dark:text-gold pb-2 font-bold">Información</h3>
            <ul className="list-none p-0">
                <li className="py-2 text-sm">
                    <Link
                        to="/que-somos"
                        className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold active:underline"
                    >
                        Acerca de nosotros
                    </Link>
                </li>
                <li className="py-2 text-sm">
                    <Link
                        to="/preguntas-frecuentes"
                        className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold active:underline"
                    >
                        Preguntas frecuentes
                    </Link>
                </li>
                <li className="py-2 text-sm">
                    <Link
                        to="/politica-de-privacidad"
                        className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold active:underline"
                    >
                        Política de Privacidad
                    </Link>
                </li>
                <li className="py-2 text-sm">
                    <Link
                        to="/politica-de-cookies"
                        className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold active:underline"
                    >
                        Política de cookies
                    </Link>
                </li>
                <li className="py-2 text-sm">
                    <Link
                        to="/sitios"
                        className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold active:underline"
                    >
                        Sitios recomendados
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ListaInformacion;
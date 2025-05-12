import React from 'react';
import { Link } from 'react-router-dom'

const ListaContacto = () => {
    return (
        <div>
            <h3 className="text-purple dark:text-gold pb-2 font-bold">Contacto</h3>
            <ul className="list-none p-0">
                <li className="py-2 text-sm">
                    <Link
                        to="/contacto"
                        className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold active:underline"
                    >
                        Contacto
                    </Link>
                </li>
                <li className="py-2 text-sm">
                    <a
                        href="https://wa.me/34697123456"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold active:underline"
                    >
                        WhatsApp
                    </a>
                </li>
                <li className="py-2 text-sm">
                    <a
                        href="tel:+34697123456"
                        className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold active:underline"
                    >
                        Teléfono: 697 123 456
                    </a>
                </li>
                <li className="py-2 text-sm">
                    <span className="dark:text-white">
                        (Petrer) 03610
                    </span>
                </li>
                <li className="py-2 text-sm">
                    <a
                        href="mailto:moveon@gmail.com"
                        className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold active:underline"
                    >
                        moveon@gmail.com
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ListaContacto;
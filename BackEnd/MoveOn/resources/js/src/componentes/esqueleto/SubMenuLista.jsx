import React from 'react';
import {Link} from "react-router-dom";
import './SubMenuLista.css';

const SubMenuLista = () => {
    return (
        /* Submenu para administrar los productos del listado. */
        <div className='submenu-lista-admin'>
            <Link className="navbar-boton " to="/lista-admin/create">Insertar producto</Link>
            <Link className="navbar-boton " to="/lista-admin/edit">Editar producto</Link>
            <Link className="navbar-boton" to="/lista-admin/delete">Eliminar producto</Link>
        </div>
    )
}

export default SubMenuLista;
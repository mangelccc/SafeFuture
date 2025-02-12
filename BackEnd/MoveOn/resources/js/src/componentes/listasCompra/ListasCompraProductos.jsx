import React from 'react';
import ListaProductosPrevia from './ListaProductosPrevia.jsx';
import { Link } from "react-router-dom";
import "./ListasCompraProductos.css";

const ListasCompraProductos = ({ id }) => {
  return (
    <>
    <section className='listas-compra-productos'>
      <h2>Productos en esta lista</h2>
      <Link to={`/listas-compra/${id}/gestion`}>
        <button>Gestionar  los productos de esta lista</button>
      </Link>
      
    </section>
    <ListaProductosPrevia />
    </>
  )
}

export default ListasCompraProductos;
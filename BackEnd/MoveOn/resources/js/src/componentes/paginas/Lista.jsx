import React from 'react';
import "./Lista.css";
import ListadoProductos from '../productos/ListadoProductos.jsx';
import FiltrosProductos from '../productos/FiltrosProductos.jsx';

const Lista = () => {

  return (
    <div className='lista-info'>
        <FiltrosProductos />
        <ListadoProductos />
    </div>
    
  )
}

export default Lista;
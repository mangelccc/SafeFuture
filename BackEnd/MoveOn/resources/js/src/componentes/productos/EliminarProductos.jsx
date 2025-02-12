import React from 'react';
import ListadoProductos from './ListadoProductos.jsx';
import "./EliminarProductos.css";

const EliminarProductos = () => {
  return (
    <>
      <div className='productos-eliminar'>
        <h2>Haz clic en un producto para eliminarlo</h2>
        {/* Paso por props eliminar, para poder habilitar su funcionalidad. */}
        <ListadoProductos eliminar={true}/>
      </div>
    </>
  )
}

export default EliminarProductos;
import React from 'react';
import FormProductos from './FormProductos';
import "./CrearProductos.css";

const CrearProductos = () => {
  return (
    <>
      <div className='productos-insertar'>
        {/* Paso por props insertar para activar el formulario en modo insertar. */}
        <FormProductos insertar={true}/>
      </div>
    </>
  )
}

export default CrearProductos;
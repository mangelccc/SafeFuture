import React from 'react'
import Ejercicios from './Ejercicios.jsx';
import Menu from './AccionesGestorEjercicios.jsx';

const GestorEjercicios = () => {
  return (
    <div className='p-6'>
      <Menu />
      <Ejercicios />
    </div>
  )
}

export default GestorEjercicios

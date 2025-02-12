import React from 'react';
import FormProductos from './FormProductos.jsx';
import ListadoProductos from './ListadoProductos.jsx';
import "./EditarProductos.css";
import useContexto from '../../hooks/useContexto.jsx'
import { useEffect } from 'react';

const EditarProductos = () => {
  const { edicion, cambiarModoDeEdicion } = useContexto("productos");

  /* Por si el usuario esta editando un producto, y decide moverse a otra ruta,
  de esta manera consigo que se vuelva a mostrar el listado. */
  useEffect(() => {
    if (edicion === true) {
      cambiarModoDeEdicion();
    };
  }, []);

  return (
    <>
      <div className='productos-editar'>
        <h2>Haz clic en un producto para editarlo</h2>
        {/* Depende del estado de edicion, mostraré o bien el listado, o bien el formulario. */}
        {edicion
          ? <FormProductos editar={true} />
          : <ListadoProductos editar={true} />}
      </div>
    </>
  )
}

export default EditarProductos;
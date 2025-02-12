import React from 'react';
import "./ListaProducto.css";

/* ListaProducto puede recibir edicion para mostrar el componente de formas distintas. */
const ListaProducto = ({ edicion, producto, cantidad }) => {

  return (

    <div className='listas-compra-producto'>
      <img src={producto.imagen_url} alt={`Imagen de ${producto.nombre}`} />
      <p>{producto.nombre}</p>
      <span>Total: {cantidad}</span>

      {edicion ? /* Si edición se ha pasado por props tendremos acceso a editar el producto. */
        <section className='botones-producto' data-id={producto.id_producto} data-cantidad={cantidad}> 
          <div>
            <button className="btn-menos">−</button>
            <button className="btn-mas">+</button>
          </div>
          {/* El botón de eliminar con clase y data-id */}
          <button className="btn-eliminar" >
            Eliminar
          </button>
        </section>
      : /* Si no se ha pasado, mostraré detalles del producto. */
        <>
          <p className='detalles'>Detalles por Ud</p>
          <p>Peso: {producto.peso} Kg</p>
          <p>Precio: {producto.precio} €</p>
        </>
      }
    </div>
  );
};

export default ListaProducto;

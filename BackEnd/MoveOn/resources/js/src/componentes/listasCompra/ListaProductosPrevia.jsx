import React from 'react';
import useContexto from '../../hooks/useContexto.jsx'
import ListaProducto from './ListaProducto.jsx';
import "./ListaProductosPrevia.css";


const ListaProductosPrevia = ({edicion}) => {

  // Obtenemos el listado de productos seleccionados y la función para eliminarlos.
  const { listaCompra, botonesDelProducto } = useContexto("listas");
  // Obtenemos el listado completo de los productos (La lista de alimentos.)
  const { listadoProductos } = useContexto("productos");

  // Combinamos los datos para cada producto seleccionado.
  const productosCombinados = listaCompra.map(item => {
    /* Busco un posible producto de la lista de la compra que tenga el mismo id_producto en el listado.  */
    const prodCompleto = listadoProductos.find(prod => prod.id_producto === item.id_producto);
    
    /* Desestructuro el item original y si se ha encontrado producto, añado todas sus propiedades al item.
    Si no se ha encontrado pongo un objeto vacío para que no incluya nada y evitar errores. */
    return {...item, ...(prodCompleto || {})}; 
    
    /* Este filter es para eliminar los posibles objetos que no tengan id_producto para tener todos los productos que quiero.*/
  }).filter(item => item.id_producto);
  

  return (
    <div className="lista-productos-previa" onClick={(e) => botonesDelProducto(e)}>
      {productosCombinados.length > 0 && Array.isArray(productosCombinados)
      ? 
        productosCombinados.map(item => 
          <ListaProducto
            key={item.id_producto}
            edicion={edicion}
            producto={item}
            cantidad={item.cantidad || 1}
          />)
      :
        <div>No hay productos en la lista aún</div>
      }
    </div>
  );
};

export default ListaProductosPrevia;

import React, { useEffect } from 'react';
import useContexto from '../../hooks/useContexto.jsx'
import { generarUuidAleatorio } from "../../bibliotecas/funcioteca.js";
import "./ListadoProductos.css";

const ListadoProductos = ({ eliminar, editar, anyadir, idListaCompra }) => {
  const { listadoProductos, productosFiltrados, borrarProducto, editarProducto, reiniciarListado } = useContexto("productos");
  const { anyadirProductosALista, listaCompra } = useContexto("listas");

  // Seleccionamos el listado según el modo
  const listado = (eliminar || editar ? listadoProductos : productosFiltrados);

  // Si estamos en modo "añadir", filtramos para que no se muestren los productos que ya están en la lista seleccionada.
  const productosDisponibles = anyadir
    ? listado.filter(producto => !listaCompra.some(item => item.id_producto === producto.id_producto))
    : listado;

    useEffect(() => {
      reiniciarListado();
    }, []);

  return (
    <div className='lista-productos'>
      <h2>Listado de productos</h2>
      {/* Se asigna una función específica según el modo actual del listado. */}
      <table
        onClick={ eliminar
            ? (e) => borrarProducto(e)
            : editar
            ? (e) => editarProducto(e)
            : anyadir
            ? (e) => anyadirProductosALista(e, idListaCompra)
            : undefined
        }
      >
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Peso</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productosDisponibles.length && Array.isArray(productosDisponibles) ? (
            productosDisponibles.map((producto) => (
              <tr key={generarUuidAleatorio()} id={producto.id_producto}>
                <td><img src={producto.imagen_url} alt={producto.nombre} /></td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.peso} Kg</td>
                <td>{producto.precio} €</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                {anyadir
                  ? "No hay mas productos para incluir en tu lista"
                  : "No hay productos que mostrar"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoProductos;


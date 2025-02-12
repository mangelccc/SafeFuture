import React from 'react';
import useContexto from '../../hooks/useContexto.jsx'
import { calcularPromedio } from "../../bibliotecas/funcioteca.js";
import "./ResumenProductos.css";

const ResumenProductos = () => {
    const { productosFiltrados } = useContexto("productos");

  return (
    <div className='lista-resumen'>
        <h3>Cuadro resumen de los productos</h3>
        <table>
            <thead>
                <tr>
                    <th>Número de productos en el listado</th>
                    <th>Precio medio de los productos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{productosFiltrados.length} productos</td>
                    {/* Función para calcular el promedio total de una propiedad de un array de objetos con la misma clave, el precio en este caso. */}
                    <td>{calcularPromedio(productosFiltrados, "precio")} €</td> 
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ResumenProductos;
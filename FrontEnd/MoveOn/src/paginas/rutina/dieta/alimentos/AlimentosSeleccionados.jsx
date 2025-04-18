import React from 'react';

const AlimentosSeleccionados = ({
    alimentosSeleccionados,
    aumentarCantidad,
    disminuirCantidad,
    eliminarAlimento,
}) => {
    if (alimentosSeleccionados.length === 0) return null;
    return (
        <div className="tabla-seleccionados">
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Alimentos Seleccionados</th>
                    </tr>
                    <tr>
                        <th>Alimento</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {alimentosSeleccionados.map((item) => (
                        <tr key={item.id_alimento}>
                            <td>{item.nombre}</td>
                            <td>{item.cantidad}</td>
                            <td>
                                <button onClick={() => aumentarCantidad(item.id_alimento)}>+</button>
                                <button onClick={() => disminuirCantidad(item.id_alimento)}>-</button>
                                <button onClick={() => eliminarAlimento(item.id_alimento)}>🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AlimentosSeleccionados
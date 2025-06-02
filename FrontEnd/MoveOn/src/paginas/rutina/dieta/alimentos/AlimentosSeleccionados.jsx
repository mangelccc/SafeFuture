import React from 'react';

const AlimentosSeleccionados = ({
    alimentosSeleccionados,
    aumentarCantidad,
    disminuirCantidad,
    eliminarAlimento,
}) => {
    if (alimentosSeleccionados.length === 0) return null;
    return (
        <div className="tabla-seleccionados my-10 bg-turq p-4 rounded-lg shadow-lg">
            <h2 className='text-center text-2xl font-bold pb-2'>Alimentos seleccionados</h2>
            <table className='w-full shadow-lg'>
                <thead>
                    <tr className='bg-black1 text-white'>
                        <th className='px-4 py-2'>Alimento</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {alimentosSeleccionados.map((item) => (
                        <tr key={item.id_alimento} className='bg-white2 text-center border-b-2 border-white3'>
                            <td className='px-4 py-2'>{item.nombre}</td>
                            <td>{item.cantidad}</td>
                            <td className='px-4 py-2 flex justify-center items-center gap-2'>
                            <button
                                    onClick={() => aumentarCantidad(item.id_alimento)}
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-full transition duration-200"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => disminuirCantidad(item.id_alimento)}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-full transition duration-200"
                                >
                                    -
                                </button>
                                <button
                                    onClick={() => eliminarAlimento(item.id_alimento)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full transition duration-200"
                                >
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AlimentosSeleccionados
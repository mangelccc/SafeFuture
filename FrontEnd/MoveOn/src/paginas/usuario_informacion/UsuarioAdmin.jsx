import React, { useEffect, useState } from 'react';
import UsuarioAdminUsers from './UsuarioAdminUsers';
import useAppContext from '../../hooks/useAppContext.jsx';
import Swal from 'sweetalert2';

const UsuarioAdmin = () => {
    const { auth } = useAppContext();
    const { eliminarCuenta } = auth;

    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [nuevoRol, setNuevoRol] = useState('');

    // Llamada al backend
    useEffect(() => {
        fetch('http://localhost:8089/api/usuarios')
            .then(res => res.json())
            .then(data => setListaUsuarios(data.usuarios))
            .catch(error => console.error('Error al obtener los usuarios:', error));
    }, []);

    const cambiarRolUsuario = async () => {
        if (!nuevoRol) return;

        try {
            const response = await fetch(`http://localhost:8089/api/usuarios/${usuarioSeleccionado.id_usuario}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rol: nuevoRol }),
            });

            if (response.ok) {
                Swal.fire('Éxito', `El rol de ${usuarioSeleccionado.nombre} ha sido actualizado.`, 'success');
                // Para actualizar la lista de usuarios localmente
                setListaUsuarios(prev =>
                    prev.map(usuario =>
                        usuario.id_usuario === usuarioSeleccionado.id_usuario ? { ...usuario, rol: nuevoRol } : usuario
                    )
                );
                setUsuarioSeleccionado(prev => ({ ...prev, rol: nuevoRol }));
                setNuevoRol('');
            } else {
                Swal.fire('Error', 'No se pudo actualizar el rol.', 'error');
            }
        } catch (err) {
            Swal.fire('Error', 'Error de red al actualizar el rol.', 'error');
        }
    };

    const botonEliminar = async () => {
        const exito = await eliminarCuenta(usuarioSeleccionado.id_usuario);
        if (exito) {
            // Quitar el usuario de la lista
            setListaUsuarios(prev =>
                prev.filter(u => u.id_usuario !== usuarioSeleccionado.id_usuario)
            );
            // Cerrar el panel de gestión
            setUsuarioSeleccionado(null);
        }
    };



    // Render
    return (
        <div className="dark:text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Lista de usuarios registrados</h2>

            <div className="space-y-2">
                {listaUsuarios.map((usuario) => (
                    <div
                        key={usuario.id_usuario}
                        onClick={() => setUsuarioSeleccionado(usuario)}
                        className="cursor-pointer hover:bg-gold dark:hover:bg-purpleOp p-2 rounded"
                    >
                        <UsuarioAdminUsers datos={usuario} />
                    </div>
                ))}
            </div>

            {usuarioSeleccionado && (
                <div className="mt-6 p-4 border rounded bg-gray-100 dark:bg-purple">
                    <h3 className="text-lg font-semibold mb-2">Gestión del usuario:</h3>
                    <p><span className='font-bold'>Nombre:</span> {usuarioSeleccionado.nombre}</p>
                    <p><span className='font-bold'>Correo:</span> {usuarioSeleccionado.correo}</p>
                    <p><span className='font-bold'>Rol:</span> {usuarioSeleccionado.rol}</p>

                    <div className="mt-4 space-y-2">
                        <select
                            className="w-full p-2 rounded bg-white dark:bg-gray-700 border"
                            value={nuevoRol}
                            onChange={(e) => setNuevoRol(e.target.value)}
                        >
                            <option value="" disabled>Seleccionar cambio de rol</option>
                            <option value="Usuario">Usuario</option>
                            <option value="Moderador">Moderador</option>
                            <option value="Administrador">Administrador</option>
                        </select>

                        <button
                            onClick={cambiarRolUsuario}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full transition"
                        >
                            Cambiar Rol
                        </button>

                        <button
                            onClick={botonEliminar}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full transition"
                        >
                            Eliminar Usuario
                        </button>
                    </div>


                </div>
            )}
        </div>
    );
};

export default UsuarioAdmin;

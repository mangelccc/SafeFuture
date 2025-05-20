import React, { useEffect, useState } from 'react';
import UsuarioAdminUsers from './UsuarioAdminUsers';
import useAppContext from '../../hooks/useAppContext.jsx';

const UsuarioAdmin = () => {
    const { auth } = useAppContext();
    const {
        usuario,
        listaUsuarios,
        obtenerUsuarios,
        cambiarRolUsuario,
        eliminarCuenta,
        usuarioSeleccionado,
        setUsuarioSeleccionado,
        setListaUsuarios
    } = auth;

    const [nuevoRol, setNuevoRol] = useState('');

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    const botonCambiarRol = () => {
        if (!nuevoRol) return;
        cambiarRolUsuario(usuarioSeleccionado.id_usuario, nuevoRol);
        setNuevoRol('');
    };

    const botonEliminar = async () => {
        const exito = await eliminarCuenta(usuarioSeleccionado.id_usuario);
        if (exito) {
            setListaUsuarios(prev =>
                prev.filter(u => u.id_usuario !== usuarioSeleccionado.id_usuario)
            );
            setUsuarioSeleccionado(null);
        }
    };

    return (
        <div className="dark:text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Lista de usuarios registrados</h2>

            <div className="space-y-2">
                {listaUsuarios
                    .filter(u => u.id_usuario !== usuario?.id_usuario)
                    .map((usuario) => (
                        <div
                            key={usuario.id_usuario}
                            onClick={() => setUsuarioSeleccionado(usuario)}
                            className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
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
                            onChange={(e) => setNuevoRol(e.target.value)}>
                            <option value="" disabled>Seleccionar cambio de rol</option>
                            <option value="Usuario">Usuario</option>
                            <option value="Moderador">Moderador</option>
                            <option value="Administrador">Administrador</option>
                        </select>

                        <button
                            onClick={botonCambiarRol}
                            className="bg-gold text-black hover:opacity-85 px-4 py-2 rounded w-full transition">
                            Cambiar Rol
                        </button>

                        <button
                            onClick={botonEliminar}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full transition">
                            Eliminar Usuario
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsuarioAdmin;

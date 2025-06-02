import React, { useContext, useEffect } from 'react';
import { contextoAuth } from "../../contextos/AuthContexto.jsx";
import UsuarioDato from './UsuarioDato.jsx';
import { camposUsuario } from '../../bibliotecas/biblioteca.js';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UsuarioDatos = ({ usuario }) => {
    const { cambiarDato, guardarDato, cancelarDato, campoEditable, errorCampo, limpiarErrorCampo, eliminarCuenta, cerrarSesion } = useContext(contextoAuth);

    useEffect(() => {
        cancelarDato();
    }, []);

    if (errorCampo) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: errorCampo,
            color: "tomato",
        });
        limpiarErrorCampo();
    }

    return (
        <>
            {camposUsuario.map(({ campo, label, sublabel }) => (
                <UsuarioDato
                    key={campo}
                    campo={campo}
                    label={label}
                    sublabel={sublabel}
                    usuario={usuario}
                    campoEditable={campoEditable}
                    cambiarDato={cambiarDato}
                    guardarDato={guardarDato}
                    cancelarDato={cancelarDato}

                />
            ))}
            <div className="flex justify-between hsm:flex-col mx-8 mb-4 hsm:mb-8">
                <button
                    type="button"
                    className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:opacity-60 transition duration-300 hsm:w-full"
                    onClick={async () => {
                        const exito = await eliminarCuenta(usuario?.id_usuario);
                        if (exito) cerrarSesion();
                    }}
                >
                    Eliminar cuenta
                </button>
                {usuario?.rol === "Administrador" &&
                    <Link to="/usuario-informacion/admin">
                        <button
                            type="button"
                            className="bg-gold font-bold py-2 px-4 rounded-lg mt-4 hover:opacity-60 transition duration-300 hsm:w-full"
                        >
                            Gestionar usuarios
                        </button>
                    </Link>
                }
            </div>

        </>
    );
};

export default UsuarioDatos;

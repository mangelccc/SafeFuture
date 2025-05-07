import React, { useContext, useEffect } from 'react';
import { contextoAuth } from "../../contextos/AuthContexto.jsx";
import UsuarioDato from './UsuarioDato.jsx';
import { camposUsuario } from '../../bibliotecas/biblioteca.js';
import Swal from 'sweetalert2';

const UsuarioDatos = ({ usuario }) => {
    const { cambiarDato, guardarDato, cancelarDato, campoEditable, errorCampo, limpiarErrorCampo } = useContext(contextoAuth);

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
        </>
    );
};

export default UsuarioDatos;

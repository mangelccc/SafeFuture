import React, { useContext } from 'react';
import { contextoAuth } from "../../contextos/AuthContexto.jsx";
import UsuarioDato from './UsuarioDato.jsx';
import { validarCampoUsuario } from '../../bibliotecas/biblioteca.js';

const UsuarioDatos = ({ usuario }) => {
    const { setCampoEditable, guardarDatoParcialUsuario, campoEditable } = useContext(contextoAuth);

    const camposUsuario = [
        { campo: "nombre", label: "Nombre de usuario", sublabel: "Usuario" },
        { campo: "correo", label: "Correo electrónico", sublabel: "Correo" },
        { campo: "contrasena", label: "Contraseña", sublabel: "Contraseña" },
        { campo: "edad", label: "Edad", sublabel: "Edad" },
        { campo: "sexo", label: "Sexo", sublabel: "Sexo" }
    ];

    const handleChange = (event) => {
        setCampoEditable(prev => ({
            ...prev,
            valor: event.target.value
        }));
    };

    const handleGuardar = () => {
        const error = validarCampoUsuario(campoEditable.campo, campoEditable.valor);

        if (error) {
            console.error(error);
            return; // No sigue si hay error //! Crear un estado y mostrar un mensaje de error.
        }

        guardarDatoParcialUsuario(); // Si no hay error, sigue normal
    };


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
                    handleChange={handleChange}
                    handleGuardar={handleGuardar}

                    
                />
            ))}
        </>
    );
};

export default UsuarioDatos;

import React, { useContext, useEffect } from 'react';
import { contextoAuth } from '../../contextos/AuthContexto.jsx';
import UsuarioChangePasswd from './UsuarioChangePasswd.jsx';

const UsuarioCheckEmail = () => {
    const {
        formResetPasswd,
        errorCampoResetPasswd,
        emailValido,
        actualizarFormResetPasswd,
        recuperarContrasena,
        reiniciarResetPasswd
    } = useContext(contextoAuth);

    useEffect(()=>{
        reiniciarResetPasswd();
    },[])

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Restablecer contraseña</h2>

            {!emailValido ? (
                <form onSubmit={recuperarContrasena} className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm">Correo electrónico</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Introduce tu email"
                            value={formResetPasswd.email}
                            onChange={actualizarFormResetPasswd}
                            className="w-full px-3 py-2 rounded-xl border"
                            required
                        />
                    </div>

                    {errorCampoResetPasswd && <p className="text-sm text-red-600">{errorCampoResetPasswd}</p>}

                    <button
                        type="submit"
                        className="px-4 py-2 bg-gold rounded-xl hover:brightness-110"
                    >
                        Verificar email
                    </button>
                </form>
            ) : (
                <UsuarioChangePasswd />
            )}
        </div>
    );
};

export default UsuarioCheckEmail;
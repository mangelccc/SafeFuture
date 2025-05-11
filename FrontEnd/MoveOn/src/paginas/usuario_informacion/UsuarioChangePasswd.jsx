import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextoAuth } from '../../contextos/AuthContexto.jsx';

const UsuarioChangePasswd = () => {
    const {
        formResetPasswd,
        errorCampoResetPasswd,
        actualizarFormResetPasswd,
        guardarCambioDePasswd
    } = useContext(contextoAuth);

    return (
        <form onSubmit={guardarCambioDePasswd} className="flex flex-col gap-4">
            <div>
                <label className="text-sm">Nueva contraseña</label>
                <input
                    name="newPwd"
                    type="password"
                    placeholder="Nueva contraseña"
                    value={formResetPasswd.newPwd}
                    onChange={actualizarFormResetPasswd}
                    className="w-full px-3 py-2 rounded-xl border"
                    required
                />
            </div>

            <div>
                <label className="text-sm">Repite nueva contraseña</label>
                <input
                    name="confirmPwd"
                    type="password"
                    placeholder="Confirma contraseña"
                    value={formResetPasswd.confirmPwd}
                    onChange={actualizarFormResetPasswd}
                    className="w-full px-3 py-2 rounded-xl border"
                    required
                />
            </div>

            {errorCampoResetPasswd && <p className="text-sm text-red-600">{errorCampoResetPasswd}</p>}

            <div className="flex gap-3 mt-4">
                <button
                    type="submit"
                    className="px-4 py-2 bg-gold rounded-xl hover:brightness-110"
                >
                    Cambiar contraseña
                </button>
                <Link to="/usuario" className="px-4 py-2 bg-gray-300 rounded-xl text-center">
                    Volver al inicio de sesión
                </Link>
            </div>
        </form>
    );
};

export default UsuarioChangePasswd;
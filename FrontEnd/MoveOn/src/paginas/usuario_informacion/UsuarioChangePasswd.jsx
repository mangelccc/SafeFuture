import React, { useState } from 'react';

const UsuarioChangePasswd = ({cambiarContrasena, cancelarDato}) => {

    const [currentPwd, setCurrentPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    return (
        <div className="flex flex-col gap-2 p-4">
            <label className="text-white">Contraseña actual</label>
            <input
                type="password"
                placeholder="Contraseña actual"
                value={currentPwd}
                onChange={e => setCurrentPwd(e.target.value)}
                className="text-black px-2 py-1 rounded"
            />
            <label className="text-white">Nueva contraseña</label>
            <input
                type="password"
                placeholder="Nueva contraseña"
                value={newPwd}
                onChange={e => setNewPwd(e.target.value)}
                className="text-black px-2 py-1 rounded"
            />
            <label className="text-white">Repite nueva contraseña</label>
            <input
                type="password"
                placeholder="Repite nueva contraseña"
                value={confirmPwd}
                onChange={e => setConfirmPwd(e.target.value)}
                className="text-black px-2 py-1 rounded"
            />
            
            <div className="flex gap-2">
                <button
                    onClick={() => cambiarContrasena({
                        current: currentPwd,
                        nueva: newPwd,
                        confirm: confirmPwd
                    })}
                    className="px-2 py-1 bg-gold text-black rounded"
                >
                    Cambiar
                </button>
                <button
                    onClick={cancelarDato}
                    className="px-2 py-1 bg-red-600 text-white rounded"
                >
                    Cancelar
                </button>
            </div>
        </div>
    )
}

export default UsuarioChangePasswd
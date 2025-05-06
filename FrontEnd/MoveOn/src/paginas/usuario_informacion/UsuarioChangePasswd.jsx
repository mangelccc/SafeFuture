import React, { useState } from 'react';
import { Link } from "react-router-dom";

const UsuarioChangePasswd = ({ cambiarContrasena }) => {
    const [currentPwd, setCurrentPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    /*//! POR HACER, HAY QUE PEDIR EL EMAIL Y COMPROBAR QUE EXISTE. */

    return (
        
            <div className="max-w-md mb-4 mx-auto w-full bg-white dark:bg-black2 p-6 rounded-2xl shadow-lg flex flex-col gap-4 border-gold border-2 ">
                <h2 className="text-xl font-semibold text-black1 dark:text-white mb-2">Cambiar contraseña</h2>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-black1 dark:text-white">Contraseña actual</label>
                    <input
                        type="password"
                        placeholder="Contraseña actual"
                        value={currentPwd}
                        onChange={e => setCurrentPwd(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 border-purple dark:border-turq bg-gray-50 dark:bg-black1 text-black dark:text-white"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-black1 dark:text-white">Nueva contraseña</label>
                    <input
                        type="password"
                        placeholder="Nueva contraseña"
                        value={newPwd}
                        onChange={e => setNewPwd(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 border-purple dark:border-turq bg-gray-50 dark:bg-black1 text-black dark:text-white"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-black1 dark:text-white">Repite nueva contraseña</label>
                    <input
                        type="password"
                        placeholder="Repite nueva contraseña"
                        value={confirmPwd}
                        onChange={e => setConfirmPwd(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 border-purple dark:border-turq bg-gray-50 dark:bg-black1 text-black dark:text-white"
                    />
                </div>

                <div className="flex gap-3 pt-2 hsm:flex-col mt-2">
                    <button
                        onClick={() => cambiarContrasena({
                            current: currentPwd,
                            nueva: newPwd,
                            confirm: confirmPwd
                        })}
                        className="px-4 py-2 rounded-xl bg-gold text-black hover:brightness-110 transition"
                    >
                        Cambiar contraseña
                    </button>
                    <Link to="/usuario">
                        <button
                            className="px-4 py-2 rounded-xl bg-gray-300 dark:bg-gray-700 text-black1 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition w-full">
                            Volver al inicio de sesión
                        </button>
                    </Link>
                </div>
            </div>
        
    );
};

export default UsuarioChangePasswd;

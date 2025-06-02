import React, { useState } from "react";


const FormularioContacto = () => {
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");

    const enviarMensajeContacto = () => {
        setAsunto("");
        setMensaje("");
    };

    return (
        <div className="mt-8 bg-white dark:bg-black2 p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-purple dark:text-gold mb-4">Envíanos un mensaje</h3>
            <form onSubmit={(e) => { e.preventDefault(); enviarMensajeContacto(); }} className="flex flex-col gap-4">
                <input
                    type="text"
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                    placeholder="Asunto"
                    className="px-4 py-2 rounded-md border border-black3 dark:border-white3 bg-white dark:bg-black1 text-black dark:text-white"
                />
                <textarea
                    rows="4"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Escribe tu mensaje aquí..."
                    className="px-4 py-2 rounded-md border border-black3 dark:border-white3 bg-white dark:bg-black1 text-black dark:text-white"
                />
                <button
                    type="submit"
                    className="self-start bg-purple dark:bg-gold text-white dark:text-black font-semibold px-4 py-2 rounded-md hover:scale-102 transition-transform"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};


export default FormularioContacto;
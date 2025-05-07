import React, { createContext, useContext, useEffect, useState } from "react";
import { contextoAuth } from "./AuthContexto.jsx";
import { API_URL } from "../bibliotecas/config.js";
import useHistorialNoFumar from "../hooks/useHistorialNoFumar.jsx";
import Swal from "sweetalert2";

const contextoNoFumar = createContext();
export const useNoFumar = () => useContext(contextoNoFumar);

export const NoFumarContexto = ({ children }) => {
    const { usuario } = useContext(contextoAuth);
    const userId = usuario?.id_usuario;

    const { records, error, loading } = useHistorialNoFumar(userId);
    const [activeRecord, setActiveRecord] = useState(null);
    const [elapsed, setElapsed] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0,
    });

    useEffect(() => {
        const activo = records.find((r) => r.status === "activo");
        setActiveRecord(activo || null);
    }, [records]);

    useEffect(() => {
        if (!activeRecord) return;
        const start = new Date(activeRecord.quit_date).getTime();

        const tick = () => {
            const diff = Date.now() - start;
            const seconds = Math.floor(diff / 1000) % 60;
            const minutes = Math.floor(diff / 1000 / 60) % 60;
            const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
            const days = Math.floor(diff / 1000 / 60 / 60 / 24);
            setElapsed({ days, hours, minutes, seconds });
        };

        tick();
        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    }, [activeRecord]);

    const handleComenzarAhora = async () => {
        if (!userId) return;

        const confirmado = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Vas a iniciar el contador para dejar de fumar",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#6320EE",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Empezar",
            cancelButtonText: "Cancelar",
        });

        if (!confirmado.isConfirmed) return;
        

        try {
            const res = await fetch(`${API_URL}/no-fumar`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id_usuario: userId,
                    quit_date: new Date().toISOString().split("T")[0],
                    status: "activo",
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Error al iniciar intento");
            }

            await Swal.fire({
                toast: true,
                position: "center",
                icon: "success",
                title: "¡Contador iniciado!",
                showConfirmButton: false,
                timer: 2000,
            });

        } catch (err) {
            Swal.fire("Error", err.message, "error");
        }
    };

    return (
        <contextoNoFumar.Provider value={{ records, activeRecord, elapsed, handleComenzarAhora }}>
            {children}
        </contextoNoFumar.Provider>
    );
};

export default NoFumarContexto;

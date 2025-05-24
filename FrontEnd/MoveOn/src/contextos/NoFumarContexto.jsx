import React, { createContext, useContext, useEffect, useState } from "react";
import { contextoAuth } from "./AuthContexto.jsx";
import { API_URL } from "../bibliotecas/config.js";
import useHistorialNoFumar from "../hooks/useHistorialNoFumar.jsx";
import Swal from "sweetalert2";

const contextoNoFumar = createContext();


export const NoFumarContexto = ({ children }) => {
    const { usuario } = useContext(contextoAuth);
    const userId = usuario?.id_usuario;

    const { records, error, loading, fetchRecords } = useHistorialNoFumar(userId);
    const [activeRecord, setActiveRecord] = useState(null);
    const [contador, setContador] = useState({
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

            setContador({ days, hours, minutes, seconds });
        };
        tick();

        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    }, [activeRecord]);


    function getLocalISOString() {
        return new Date().toISOString();
    }

    const comenzarIntento = async () => {
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
            const nowISO = getLocalISOString();

            const res = await fetch(`${API_URL}/no-fumar`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ id_usuario: userId, quit_date: nowISO, status: "activo" }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Error al iniciar intento");
            }

            const intentoGuardado = await res.json();

            // establece activeRecord "activo" y reinicia el contador a 0
            setActiveRecord(intentoGuardado.no_fumar);
            setContador({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            await fetchRecords();

            await Swal.fire({
                toast: true,
                position: "top",
                icon: "success",
                title: "¡Contador iniciado, ánimo valiente!",
                showConfirmButton: false,
                timer: 2000,
            });

        } catch (err) {
            console.error("Error al iniciar intento:", err);
            Swal.fire("Error", err.message, "error");
        }
    };

    // Función para marcar recaída
    const terminarIntento = async () => {
        if (!activeRecord) return;

        Swal.fire({
            title: "¿Ya has vuelto a fumar?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Si 🥲",
            cancelButtonText: "Aún no 😎",
        }).then(async (result) => {
            if (result.isConfirmed) {

                try {
                    const res = await fetch(`${API_URL}/no-fumar/${activeRecord.id}`, {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ status: "recaida" }),
                    });
                    if (!res.ok) {
                        const data = await res.json();
                        throw new Error(data.message || "Error al terminar intento");
                    }

                    setActiveRecord(null);
                    setContador({ days: 0, hours: 0, minutes: 0, seconds: 0 });

                    await fetchRecords();

                    await Swal.fire({
                        toast: true,
                        position: "top",
                        icon: "success",
                        title: "¡Ánimo con tu próximo intento, tú puedes!",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                } catch (err) {
                    Swal.fire("Error", err.message, "error");
                }
            }
        });

    };


    return (
        <contextoNoFumar.Provider value={{ records, activeRecord, contador, comenzarIntento, loading, terminarIntento }}>
            {children}
        </contextoNoFumar.Provider>
    );
};

export default NoFumarContexto;
export const useNoFumar = () => useContext(contextoNoFumar);
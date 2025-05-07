// src/hooks/useHistorialNoFumar.js
import { useState, useEffect } from "react";
import { API_URL } from "../bibliotecas/config.js";

export default function useHistorialNoFumar(userId) {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    if (!userId) return;

    const fetchHistorial = async () => {
      try {
        const res = await fetch(`${API_URL}/usuario/${userId}/no-fumar`);
        
        const contentType = res.headers.get("content-type");
        console.log(res)
        if (!res.ok) {
          if (contentType && contentType.includes("application/json")) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Error al obtener historial");
          } else {
            const text = await res.text();
            throw new Error("Respuesta no válida del servidor:\n" + text.slice(0, 100));
          }
        }
    
        const data = await res.json();
        console.log(data)
        setRecords(data.no_fumar || []);
      } catch (err) {
        console.error("Error al obtener intentos:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    

    fetchHistorial();
  }, [userId]);

  return { records, error, loading };
}

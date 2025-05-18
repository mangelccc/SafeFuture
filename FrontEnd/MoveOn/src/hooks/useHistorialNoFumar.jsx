import { useState, useEffect, useCallback } from "react";
import { API_URL } from "../bibliotecas/config.js";

export default function useHistorialNoFumar(userId) {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Función para (re)fetch del historial
  const fetchHistorial = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/usuario/${userId}/no-fumar`);
      const contentType = res.headers.get("content-type");

      if (!res.ok) {
        if (contentType?.includes("application/json")) {
          const errData = await res.json();
          throw new Error(errData.message || "Error al obtener historial");
        } else {
          const text = await res.text();
          throw new Error("Respuesta no válida del servidor:\n" + text.slice(0, 100));
        }
      }

      const data = await res.json();
      setRecords(data.no_fumar || []);
    } catch (err) {
      console.error("Error al obtener intentos:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  // Lanza el primer fetch y cada vez que cambie userId
  useEffect(() => {
    fetchHistorial();
  }, [fetchHistorial]);

  return { records, error, loading, fetchRecords: fetchHistorial };
}

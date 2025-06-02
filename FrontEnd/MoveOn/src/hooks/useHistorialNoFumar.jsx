import { useState, useEffect, useCallback } from "react";
import { API_URL } from "../bibliotecas/config.js";

export default function useHistorialNoFumar(userId, token) {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchHistorial = useCallback(async () => {
    if (!userId || !token) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/usuario/${userId}/no-fumar`, {
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

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
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [userId, token]);

  useEffect(() => {
    fetchHistorial();
  }, [fetchHistorial]);

  return { records, error, loading, fetchRecords: fetchHistorial };
}


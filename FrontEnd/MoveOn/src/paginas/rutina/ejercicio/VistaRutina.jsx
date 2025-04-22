import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VistaRutina = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRutinaEjercicios = async () => {
      try {
        const res = await fetch('http://localhost:8089/api/rutina-ejercicio');
        const raw = await res.json();
        console.log('Raw pivot response:', raw);
        // La respuesta contiene `rutina_ejercicios` con los datos reales
        const array = Array.isArray(raw.rutina_ejercicios)
          ? raw.rutina_ejercicios
          : [];
        const filtrados = array.filter(item => item.id_rutina.toString() === id);
        setItems(filtrados);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Error al cargar los ejercicios de la rutina');
      } finally {
        setLoading(false);
      }
    };
    fetchRutinaEjercicios();
  }, [id]);

  if (loading) return <p>Cargando ejercicios...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Ejercicios de la Rutina #{id}</h1>
      {items.length === 0 ? (
        <p>No hay ejercicios ligados a esta rutina.</p>
      ) : (
        <ul className="space-y-3">
          {items.map(item => (
            <li key={item.id_rutina_ejercicio} className="border p-4 rounded-lg">
              <p><strong>Ejercicio ID:</strong> {item.id_ejercicio}</p>
              <p><strong>Series:</strong> {item.num_series}</p>
              <p><strong>Repeticiones:</strong> {item.num_repeticiones}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VistaRutina;

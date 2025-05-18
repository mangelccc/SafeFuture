import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../bibliotecas/config';

const DetalleEjercicio = () => {
  const { id } = useParams();
  const [ejercicio, setEjercicio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/ejercicios/${id}`)
      .then(res => res.json())
      .then(data => setEjercicio(data.ejercicio || data))
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!ejercicio) return <p>Cargando...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{ejercicio.nombre}</h1>
      <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Descripción:</strong> {ejercicio.descripcion}</p>
      <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Grupo Muscular:</strong> {ejercicio.grupo_muscular}</p>
      <div className="flex flex-col md:flex-row gap-4">
        <img src={ejercicio.imagen_url} alt={ejercicio.nombre} className="w-full md:w-1/2 object-cover rounded" />
        <video controls src={ejercicio.video_url} className="w-full md:w-1/2 rounded" />
      </div>
    </div>
  );
};

export default DetalleEjercicio;
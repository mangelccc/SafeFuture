import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../bibliotecas/config';

const DetalleEjercicio = () => {
  const { id } = useParams();
  const [ejercicio, setEjercicio] = useState(null);
  const [error, setError] = useState(null);
    const navigate = useNavigate();


  useEffect(() => {
    fetch(`${API_URL}/ejercicios/${id}`)
      .then(res => res.json())
      .then(data => setEjercicio(data.ejercicio || data))
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!ejercicio) return <p>Cargando...</p>;

  return (
    <div className="p-6 h-full  bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Nombre: {ejercicio.nombre}</h2>
      <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Descripción:</strong> {ejercicio.descripcion}</p>
      <p className="mb-2 text-gray-700 dark:text-gray-300"><strong>Grupo Muscular:</strong> {ejercicio.grupo_muscular}</p>
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={ejercicio.imagen_url}
          alt={ejercicio.nombre}
          className="w-full md:w-1/2 object-cover rounded"
          style={{ maxWidth: '600px', maxHeight: '600px', width: 'auto', height: 'auto' }}
        />
      </div>
      <div className="p-6">
      {/* contenido existente */}
      
      <button
        onClick={() => navigate(-1)}
        className="inline-block bg-black1 text-white text-xl font-bold px-6 py-3 rounded-xl transition ease-in-out duration-200 hover:bg-gold hover:text-black1 hover:-translate-y-1.5 active:translate-y-1 active:bg-gold"
      >
        Volver
      </button>
    </div>
    </div>
  );
};

export default DetalleEjercicio;
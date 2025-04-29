import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAppContext from '../../../hooks/useAppContext.jsx';
import Ejercicio from './Ejercicio.jsx';

const VistaRutina = () => {
  const { id } = useParams();
  const { ejerciciosContex } = useAppContext();
  const { ejercicios } = ejerciciosContex;

  const [items, setItems] = useState([]);
  const [rutinaNombre, setRutinaNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1) Obtener el nombre de la rutina
        const resRut = await fetch(`http://localhost:8089/api/rutinas/${id}`);
        if (!resRut.ok) throw new Error(`Status ${resRut.status}`);
        const rawRut = await resRut.json();
        const rut = rawRut.rutina || rawRut;
        setRutinaNombre(rut.nombre || `Rutina ${id}`);

        // 2) Obtener pivots de rutina-ejercicio
        const res = await fetch('http://localhost:8089/api/rutina-ejercicio');
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const raw = await res.json();
        const pivots = Array.isArray(raw.rutina_ejercicios) ? raw.rutina_ejercicios : [];

        // Filtrar por la rutina actual
        const filtrados = pivots.filter(p => p.id_rutina.toString() === id);

        // Mapear cada pivot con datos de ejercicios ya cargados
        const detalles = filtrados.map(pivot => {
          const ej = ejercicios.find(e => e.id_ejercicio === pivot.id_ejercicio) || {};
          return {
            id_rutina_ejercicio: pivot.id_rutina_ejercicio,
            num_series: pivot.num_series,
            num_repeticiones: pivot.num_repeticiones,
            nombre: ej.nombre,
            descripcion: ej.descripcion,
            grupo_muscular: ej.grupo_muscular,
            imagen_url: ej.imagen_url,
            video_url: ej.video_url
          };
        });

        setItems(detalles);
      } catch (err) {
        console.error('Error cargando datos de la rutina:', err);
        setError('No se pudieron cargar los datos de esta rutina.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, ejercicios]);

  if (loading) return <p>Cargando ejercicios...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Titulo: {rutinaNombre}</h1>
      
      {items.length === 0 ? (
        <p>No hay ejercicios ligados a esta rutina.</p>
      ) : (
        <div className="flex flex-wrap gap-4 h-[500px] w-full overflow-y-scroll">          
        {items.map(item => (
            <Ejercicio
              key={item.id_rutina_ejercicio}
              nombre={item.nombre}
              descripcion={item.descripcion}
              grupoMuscular={item.grupo_muscular}
              imagen={item.imagen_url}
              video={item.video_url}
              series={item.num_series}
              repeticiones={item.num_repeticiones}
              showSeries={true}
            />
          ))}
        </div>
      )}
      </div>
  );
};

export default VistaRutina;

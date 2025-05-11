import React, { useEffect, useState } from 'react';
import Entrenamiento from './Entrenamiento.jsx';
import { API_URL } from '../../../bibliotecas/config.js';

const Entrenamientos = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = `${API_URL}/rutinas`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('fetch directo:', data.rutinas);
        setItems(data.rutinas);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      });
  }, [apiUrl]);

  if (error) return <p>Error: {error}</p>;
  if (items === null) return <p>Cargando…</p>;
  if (!Array.isArray(items) || items.length === 0) return <p>No hay entrenamientos.</p>;

  return (
    <div>
       <h2 className='pb-4'>
                <strong>Entrenamientos</strong>
            </h2>
      {items.map(e => (
        <Entrenamiento key={e.id_rutina} entrenamiento={e} />
      ))}
    </div>
  );
};

export default Entrenamientos;

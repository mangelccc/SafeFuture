// Traslados.jsx
import React, { useState, useEffect } from 'react';

const PAIS_MAP = {
  ZRH: 'Suiza',
  DUB: 'Irlanda',
  SYD: 'Australia',
};

const DESTINOS = [
  { label: 'Todos', value: '' },
  { label: 'Suiza',   value: 'Suiza' },
  { label: 'Irlanda', value: 'Irlanda' },
  { label: 'Australia', value: 'Australia' },
];

export default function Traslados() {
  const [traslados, setTraslados] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    fetch('https://sfmoveon.es/api/traslados')
      .then(res => res.json())
      .then(json => setTraslados(json.traslados))
      .catch(console.error);
  }, []);

  const mostrados = filtro
    ? traslados.filter(t => PAIS_MAP[t.aeropuerto_llegada] === filtro)
    : traslados;

  return (
    <div className="p-6 bg-purple dark:bg-black2 min-h-screen sm:rounded-xl">
      <div className="sm:w-3/4 hsm:w-full mx-auto">
        <h1 className="text-gold text-4xl font-bold mb-6 text-center">Vuelos de Hoy</h1>

        <div className="mb-6 flex justify-center">
          <select
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
            className="bg-black3 text-white py-2 px-4 rounded-lg shadow focus:outline-none"
          >
            {DESTINOS.map(d => (
              <option key={d.value} value={d.value}>{d.label}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-x-14 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {mostrados.map(t => (
            <div
              key={t.id_traslado}
              className="bg-black2 dark:bg-black3 p-4 rounded-2xl shadow-lg space-y-2 hover:scale-102 transition-transform"
            >
              <p className="text-white2 font-semibold">
                {t.aeropuerto_salida} → {t.aeropuerto_llegada} ({PAIS_MAP[t.aeropuerto_llegada]})
              </p>
              <p className="text-white text-sm">
                Fecha: <span className="font-medium">{t.fecha_salida}</span>
              </p>
              <p className="text-white text-sm capitalize">
                Estado: <span className="font-medium">{t.estado}</span>
              </p>
              <p className="text-white text-sm">
                Código: <span className="font-medium">{t.codigo}</span>
              </p>
              <a
                href={`https://www.google.com/search?q=${t.codigo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-black1 font-bold py-1 px-3 rounded-xl mt-2 hover:bg-goldOp transition-colors text-sm"
              >
                Ver en Google
              </a>
            </div>
          ))}
          {mostrados.length === 0 && (
            <p className="col-span-full text-center text-white2">
              No hay vuelos para "{filtro}" hoy.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

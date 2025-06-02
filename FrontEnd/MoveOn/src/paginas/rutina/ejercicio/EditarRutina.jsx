import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAppContext from '../../../hooks/useAppContext.jsx';
import Ejercicio from './Ejercicio.jsx';
import { SearchBar } from './buscador/SearchBar.jsx';
import { SearchResultsList } from './buscador/SearchResultsList.jsx';
import Swal from 'sweetalert2';
import { API_URL } from '../../../bibliotecas/config.js';

const EditarRutina = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ejerciciosContex } = useAppContext();
  const { ejercicios } = ejerciciosContex;

  // Estado local
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [originalPivots, setOriginalPivots] = useState([]);
  const [guardando, setGuardando] = useState(false);

  // Carga inicial de rutina y pivots
  useEffect(() => {
    const fetchRutina = async () => {
      try {
        const res = await fetch(`${API_URL}/rutinas/${id}`);
        const data = await res.json();
        const rut = data.rutina || data;
        setNombre(rut.nombre);
        setDescripcion(rut.descripcion);
        // traer pivots
        const pivRes = await fetch(`${API_URL}/rutina-ejercicio`);
        const pivData = await pivRes.json();
        const pivots = pivData.rutina_ejercicios || [];
        const filtrados = pivots.filter(p => p.id_rutina.toString() === id);
        setOriginalPivots(filtrados);
        // map a seleccionados con detalles
        const detalles = filtrados.map(pivot => {
          const ej = ejercicios.find(e => e.id_ejercicio === pivot.id_ejercicio) || {};
          return {
            pivotId: pivot.id_rutina_ejercicio,
            id_ejercicio: pivot.id_ejercicio,
            num_series: pivot.num_series,
            num_repeticiones: pivot.num_repeticiones,
            nombre: ej.nombre,
            descripcion: ej.descripcion,
            grupo_muscular: ej.grupo_muscular,
            imagen_url: ej.imagen_url,
            video_url: ej.video_url,
          };
        });
        setSeleccionados(detalles);
      } catch (err) {
        Swal.fire('Error', 'No se pudo cargar la rutina', 'error');
      }
    };
    fetchRutina();
  }, [id, ejercicios]);

  // Handlers
  const handleRemove = (pivotId) => {
    setSeleccionados(prev => prev.filter(e => e.pivotId !== pivotId));
  };
  const handleAdd = (ej) => {
    if (!seleccionados.some(s => s.id_ejercicio === ej.id_ejercicio)) {
      setSeleccionados(prev => [...prev, { ...ej, pivotId: null, num_series: 3, num_repeticiones: 10 }]);
    }
  };
  const updateField = (pivotId, field, value) => {
    setSeleccionados(prev => prev.map(e => e.pivotId === pivotId || (pivotId === null && e.id_ejercicio === value.id_ejercicio)
      ? { ...e, [field]: value }
      : e
    ));
  };

  const handleGuardar = async () => {
    const errores = [];
    if (!nombre.trim()) errores.push('Nombre obligatorio.');
    if (!descripcion.trim()) errores.push('Descripción obligatoria.');
    if (errores.length) {
      Swal.fire({ icon: 'error', title: 'Errores', html: errores.join('<br/>') });
      return;
    }
    setGuardando(true);
    Swal.fire({ title: 'Guardando...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
    try {
      // 1) actualizar nombre/desc
      await fetch(`${API_URL}/rutinas/${id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, descripcion })
      });
      // 2) diffs
      // eliminar pivots removidos
      const removed = originalPivots.filter(op => !seleccionados.find(s => s.pivotId === op.id_rutina_ejercicio));
      await Promise.all(removed.map(r => fetch(`${API_URL}/rutina-ejercicio/${r.id_rutina_ejercicio}`, { method: 'DELETE' })));
      // crear nuevos
      const created = seleccionados.filter(s => s.pivotId === null);
      await Promise.all(created.map(s => fetch(`${API_URL}/rutina-ejercicio`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_rutina: id, id_ejercicio: s.id_ejercicio, num_series: s.num_series, num_repeticiones: s.num_repeticiones })
      })));
      // actualizar existentes modificados
      const intersect = seleccionados.filter(s => s.pivotId !== null);
      await Promise.all(intersect.map(s => fetch(`${API_URL}/rutina-ejercicio/${s.pivotId}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ num_series: s.num_series, num_repeticiones: s.num_repeticiones })
      })));
      Swal.fire({ icon: 'success', title: 'Guardado', timer: 1500, showConfirmButton: false });
      navigate(-1);
    } catch (err) {
      Swal.fire('Error', 'No se pudo guardar los cambios', 'error');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 dark:text-gold">Editar Rutina</h2>
      <div className="space-y-4">
        <div>
          <label className="w-full rounded bg-white dark:bg-black px-2 border-2
                    border-black p-2 outline-none focus:border-purple transition duration-300 dark:text-white">Nombre:</label>
          <input value={nombre} onChange={e => setNombre(e.target.value)} className="w-full px-2 py-1 border rounded" />
        </div>
        <div>
          <label className="w-full rounded bg-white dark:bg-black px-2 border-2
                    border-black p-2 outline-none focus:border-purple transition duration-300 dark:text-white">Descripción:</label>
          <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} className="w-full px-2 py-1 border rounded" />
        </div>
        <div>
          <h3 className="font-medium mb-2 dark:text-white">Buscar Ejercicios:</h3>
          <SearchBar setResults={setResultadoBusqueda} />
          {resultadoBusqueda.length > 0 && <SearchResultsList results={resultadoBusqueda} onSelect={handleAdd} />}
        </div>
        <div className="border rounded p-4 max-h-[400px] overflow-auto">
          {seleccionados.length ? seleccionados.map(ej => (
            <div key={ej.pivotId || ej.id_ejercicio} className="flex items-center mb-3">
              <Ejercicio {...ej} showSeriesEdit={true}
                onChangeSeries={val => updateField(ej.pivotId, 'num_series', val)}
                onChangeRepeticiones={val => updateField(ej.pivotId, 'num_repeticiones', val)} 
                onClick={() => handleRemove(ej.pivotId)}/>
            </div>
          )) : <p>No hay ejercicios seleccionados</p>}
        </div>
        <button onClick={handleGuardar} disabled={guardando} className="px-6 py-2 bg-purple text-white rounded">
          {guardando ? 'Guardando...' : 'Guardar Cambios'}
        </button>
      </div>
    </div>
  );
};

export default EditarRutina;

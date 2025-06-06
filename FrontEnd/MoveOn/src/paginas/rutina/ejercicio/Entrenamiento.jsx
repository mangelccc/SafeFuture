import React from 'react';
import useAppContext from '../../../hooks/useAppContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPenToSquare,
  faAngleRight,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_URL } from '../../../bibliotecas/config.js';

const Entrenamiento = ({ entrenamiento, deleteEntrenamiento, esPlantilla = false }) => {
  const navigate = useNavigate();
  const { entrenamientoContexto, auth } = useAppContext();
  const { readEntrenamientos } = entrenamientoContexto;
  const { usuario } = auth;

  const handleAgregarPlantilla = async () => {
    const { isConfirmed } = await Swal.fire({
      title: '¿Agregar rutina a tus entrenamientos?',
      text: `Se copiará la rutina "${entrenamiento.nombre}" a tus rutinas. ¿Continuar?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, copiar',
      cancelButtonText: 'Cancelar',
      background: '#1A1A1A',
      color: '#F5F5F5'
    });
    if (!isConfirmed) return;

    Swal.fire({
      title: 'Copiando rutina...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
      background: '#1A1A1A',
      color: '#F5F5F5'
    });

    try {
      // 1) Crear nueva rutina para el usuario
      const nuevaRutinaRes = await fetch(`${API_URL}/rutinas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uuid: crypto.randomUUID(),
          uuid_usuario: usuario.id_usuario,
          nombre: entrenamiento.nombre,
          descripcion: entrenamiento.descripcion
        })
      });
      const nuevaRutinaData = await nuevaRutinaRes.json();
      const nuevaRutina = nuevaRutinaData.rutina || nuevaRutinaData;

      // 2) Obtener pivots de la plantilla
      const pivRes = await fetch(`${API_URL}/rutina-ejercicio`);
      const pivData = await pivRes.json();
      const pivots = pivData.rutina_ejercicios || [];
      const ejerciciosPlantilla = pivots.filter(p => p.id_rutina === entrenamiento.id_rutina);

      // 3) Crear pivots para la nueva rutina
      await Promise.all(
        ejerciciosPlantilla.map(pivot =>
          fetch(`${API_URL}/rutina-ejercicio`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id_rutina: nuevaRutina.id_rutina,
              id_ejercicio: pivot.id_ejercicio,
              num_series: pivot.num_series,
              num_repeticiones: pivot.num_repeticiones
            })
          })
        )
      );

      Swal.fire({
        title: 'Rutina copiada',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        background: '#1A1A1A',
        color: '#F5F5F5'
      });

      readEntrenamientos();
    } catch (error) {
      Swal.fire('Error', 'No se pudo copiar la rutina', 'error');
    }
  };

  return (
    <div
      key={entrenamiento.id_rutina}
      className="entrenamiento border-2 rounded-lg m-5 dark:text-white border-black dark:border-white p-2 flex justify-between items-center hover:bg-purple hover:text-gold transition-all duration-300"

    >
      <div className="flex-1">
        <p><strong>Nombre:</strong> {entrenamiento.nombre}</p>
        <p className='hsm:hidden'><strong>Descripción:</strong> {entrenamiento.descripcion}</p>
      </div>

      <div className="flex items-center gap-4">
        {esPlantilla ? (
          <FontAwesomeIcon
            icon={faPlus}
            size="2x"
            className="cursor-pointer"
            onClick={handleAgregarPlantilla}
          />
        ) : (
          <>
            <FontAwesomeIcon
              icon={faTrash}
              size="2x"
              className="cursor-pointer"
              onClick={e => {
                e.preventDefault();
                deleteEntrenamiento(entrenamiento.id_rutina);
              }}
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="2x"
              className="cursor-pointer"
              onClick={() => navigate(`/rutina/ejercicio/editar-rutina/${entrenamiento.id_rutina}`)}
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              size="2x"
              className="cursor-pointer"
              onClick={() => navigate(`/rutina/ejercicio/ver-rutina/${entrenamiento.id_rutina}`)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Entrenamiento;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAppContext from '../../../hooks/useAppContext.jsx';
import Ejercicio from './Ejercicio.jsx';
import Swal from 'sweetalert2';

const VistaRutina = () => {
  const { id } = useParams();
  const { ejerciciosContex,entrenamientoContexto } = useAppContext();
  const { ejercicios } = ejerciciosContex;
  const { fetchData,cargando,errorVistaEntrenamiento,rutinaNombre,ejerciciosVista } = entrenamientoContexto;

  useEffect(() => {
    fetchData(id,ejercicios);
  }, [id, ejercicios]);

  useEffect(() => {
    if (cargando) {
      Swal.fire({
        title: 'Cargando ejercicios...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
          const spinner = document.querySelector('.swal2-loader');
          if (spinner) {
            spinner.style.borderColor = '#6320EE';
            spinner.style.borderTopColor = 'transparent';
          }
        },
        background: '#1A1A1A',
        color: '#F5F5F5'
      });
    } else {
      Swal.close();
    }
  }, [cargando]);
  if (errorVistaEntrenamiento) return <p className="text-red-500">{errorVistaEntrenamiento}</p>;

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-6 dark:text-white">{rutinaNombre}</h2>
      
      {ejerciciosVista.length === 0 ? (
        <p>No hay ejercicios ligados a esta rutina.</p>
      ) : (
        <div className="flex flex-wrap gap-4 h-[600px] w-full overflow-y-scroll border-2 border-black dark:border-white rounded">          
        {ejerciciosVista.map(ejercicioVista => (
            <Ejercicio
              key={ejercicioVista.id_rutina_ejercicio}
              nombre={ejercicioVista.nombre}
              descripcion={ejercicioVista.descripcion}
              grupoMuscular={ejercicioVista.grupo_muscular}
              imagen={ejercicioVista.imagen_url}
              video={ejercicioVista.video_url}
              series={ejercicioVista.num_series}
              repeticiones={ejercicioVista.num_repeticiones}
              showSeries={true}
            />
          ))}
        </div>
      )}
      </div>
  );
};

export default VistaRutina;

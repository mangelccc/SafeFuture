import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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
      <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-block bg-black3 text-white text-xl font-bold px-6 py-3 rounded-xl transition ease-in-out duration-200 hover:bg-gold hover:text-black1 hover:-translate-y-1.5 active:translate-y-1 active:bg-gold"
      >
        Volver
      </button>
      </div>
      </div>
  );
};

export default VistaRutina;

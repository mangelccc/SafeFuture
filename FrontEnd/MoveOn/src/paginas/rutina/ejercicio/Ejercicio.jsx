import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Ejercicio = ({
  id_ejercicio,
  nombre,
  descripcion,
  grupo_muscular,
  imagen_url,
  video_url: video,
  series: initialSeries,
  repeticiones: initialRepeticiones,
  showSeries = false,
  showSeriesEdit = false,
  onChangeSeries,
  onChangeRepeticiones,
  onClick
}) => {
  const [series, setSeries] = useState(initialSeries ?? 3);
  const [repeticiones, setRepeticiones] = useState(initialRepeticiones ?? 10);

  useEffect(() => {
    if (initialSeries != null) setSeries(initialSeries);
  }, [initialSeries]);

  useEffect(() => {
    if (initialRepeticiones != null) setRepeticiones(initialRepeticiones);
  }, [initialRepeticiones]);

  const handleSeriesChange = e => {
    const val = parseInt(e.target.value, 10) || 0;
    setSeries(val);
    if (onChangeSeries) onChangeSeries(val);
  };

  const handleRepsChange = e => {
    const val = parseInt(e.target.value, 10) || 0;
    setRepeticiones(val);
    if (onChangeRepeticiones) onChangeRepeticiones(val);
  };
   const navigate = useNavigate();

  const handleClick = () => {
    if (!showSeriesEdit) {
      navigate(`/rutina/ejercicio/detalle/${id_ejercicio}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`ejercicio border-2 rounded-lg m-5 border-black dark:border-turq w-[300px] p-3 flex flex-col bg-white2 dark:bg-black dark:text-white transition-all duration-300 transform hover:scale-102 ${
        showSeriesEdit ? "h-[360px]" : showSeries ? "h-[360px]" : "h-[300px]"
      }`}
    >
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Grupo Muscular:</strong> {grupo_muscular}</p>

      <div className="flex justify-center mt-2">
        <video
          poster={imagen_url}
          src={video}
          className="w-[200px] h-[200px] object-cover rounded-lg border-2 border-black dark:border-turq"
        />
      </div>

      {(showSeries || showSeriesEdit) && (
        <div className="mt-2 text-center space-y-2">
          {showSeries && (
            <>
              <p><strong>Series:</strong> {series}</p>
              <p><strong>Repeticiones:</strong> {repeticiones}</p>
            </>
          )}

          {showSeriesEdit && (
            <div className="flex flex-row items-start justify-between">
              <div
                className="flex-1 w-full h-full self-end cursor-pointer text-purple hover:text-red-800 dark:text-gold transition"
                onClick={(e) => {
                  e.stopPropagation(); // Previene el clic del contenedor
                  if (onClick) onClick();
                }}
              >
                <FontAwesomeIcon icon={faTrash} size="2x" />
              </div>
              <div className="flex-1">
                <label className="block font-medium">Series</label>
                <input
                  type="number"
                  value={series}
                  onChange={handleSeriesChange}
                  className="w-10 rounded p-[1px] border border-gray-300 focus:ring-2 focus:ring-purple dark:focus:ring-gold transition text-center dark:text-black"
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium">Repeticiones</label>
                <input
                  type="number"
                  value={repeticiones}
                  onChange={handleRepsChange}
                  className="w-10 rounded p-[1px] border border-gray-300 focus:ring-2 focus:ring-purple dark:focus:ring-gold text-center transition dark:text-black"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Ejercicio;

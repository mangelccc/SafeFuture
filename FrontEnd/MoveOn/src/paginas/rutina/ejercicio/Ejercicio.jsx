import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Ejercicio = ({
  nombre,
  descripcion,
  grupoMuscular,
  imagen,
  video,
  series: initialSeries,
  repeticiones: initialRepeticiones,
  showSeries = false,
  showSeriesEdit = false,
  onChangeSeries,
  onChangeRepeticiones,
  onClick
}) => {
  // Local state for editable inputs
  const [series, setSeries] = useState(initialSeries ?? 3);
  const [repeticiones, setRepeticiones] = useState(initialRepeticiones ?? 10);

  // Sync incoming props when they change
  useEffect(() => {
    if (initialSeries != null) setSeries(initialSeries);
  }, [initialSeries]);

  useEffect(() => {
    if (initialRepeticiones != null) setRepeticiones(initialRepeticiones);
  }, [initialRepeticiones]);

  // Handlers for edit mode
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

  return (
    <div className={`ejercicio border-2 rounded-lg m-5 border-black dark:border-gold w-[300px] p-3 flex flex-col bg-white dark:bg-purple dark:text-gold transition-all duration-300 transform hover:scale-105 ${
      showSeriesEdit ? "h-[420px]" : showSeries ? "h-[340px]" : "h-[300px]"
    }`}>
       
      <p><strong>Nombre:</strong> {nombre}</p>
      {/*<p><strong>Descripción:</strong> {descripcion}</p>*/}
      <p><strong>Grupo Muscular:</strong> {grupoMuscular}</p>

      <div className="flex justify-center mt-2">
        <video
          poster={imagen}
          src={video}
          className="w-[200px] h-[200px] object-cover rounded-lg border-2 dark:border-gold"
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
              <div>
                <label className="block font-medium">Series:</label>
                <input
                  type="number"
                  value={series}
                  onChange={handleSeriesChange}
                  className="w-20 rounded px-2 py-1 border border-gray-300 focus:ring-2 focus:ring-purple dark:focus:ring-gold transition"
                />
              </div>
              <div
               className="w-full h-full self-center cursor-pointer text-purple hover:text-red-800 dark:text-gold transition"
               onClick={onClick}
             >
               <FontAwesomeIcon icon={faTrash} size="2x" />
             </div>
              <div>
                <label className="block font-medium">Repeticiones:</label>
                <input
                  type="number"
                  value={repeticiones}
                  onChange={handleRepsChange}
                  className="w-20 rounded px-2 py-1 border border-gray-300 focus:ring-2 focus:ring-purple dark:focus:ring-gold transition"
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

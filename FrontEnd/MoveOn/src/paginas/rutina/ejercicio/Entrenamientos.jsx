import React, { useState, useEffect } from 'react';
import Entrenamiento from './Entrenamiento.jsx';
import useAppContext from "../../../hooks/useAppContext.jsx";

const Entrenamientos = () => {
  const { entrenamientoContexto, auth } = useAppContext();
  const { usuario } = auth;

  // Array crudo del contexto (asegurándonos que sea un array)
  const rawEntrenamientos = Array.isArray(entrenamientoContexto?.entrenamientosFiltrados)
    ? entrenamientoContexto.entrenamientosFiltrados
    : [];

  // 1) Estado para los entrenamientos filtrados por uuid
  const [misEntrenamientos, setMisEntrenamientos] = useState([]);

  // 2) Cada vez que cambie el raw o el usuario, recalculamos
  useEffect(() => {
    const filtrados = rawEntrenamientos.filter(
      e => e.uuid_usuario === usuario.id_usuario
    );
    setMisEntrenamientos(filtrados);
  }, [rawEntrenamientos, usuario.id_usuario]);

  return (
    <div>
      <h2 className='pb-4'>
        <strong>Entrenamientos</strong>
      </h2>

      {misEntrenamientos.length > 0 ? (
        misEntrenamientos.map(ent => (
          <Entrenamiento
            key={ent.id_rutina}
            entrenamiento={ent}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No hay entrenamientos.
        </p>
      )}
    </div>
  );
};

export default Entrenamientos;

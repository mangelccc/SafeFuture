import React, { useMemo } from 'react';
import Entrenamiento from './Entrenamiento.jsx';
import useAppContext from "../../../hooks/useAppContext.jsx";

const Entrenamientos = () => {
  const { entrenamientoContexto, auth } = useAppContext();
  const { usuario } = auth;

  const rawEntrenamientos = Array.isArray(entrenamientoContexto?.entrenamientosFiltrados)
    ? entrenamientoContexto.entrenamientosFiltrados
    : [];

  // 1) Filtrado memoizado: solo se recalcula si cambian rawEntrenamientos o el id de usuario
  const misEntrenamientos = useMemo(
    () => rawEntrenamientos.filter(e => e.uuid_usuario === usuario.id_usuario),
    [rawEntrenamientos, usuario.id_usuario]
  );

  return (
    <div>
      <h2 className='pb-4 dark:text-white'>
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

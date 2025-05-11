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
      <div className='gap-4 h-[600px] overflow-y-scroll border-2 border-black dark:border-white rounded'>
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
    </div>
  );
};

export default Entrenamientos;

import React from 'react'

const Alimentos = ({ alimentos, seleccionarAlimento, dietaId }) => (
  <div className="lista-alimentos">
    <h3>Alimentos</h3>
    <ul>
      {alimentos.length > 0 ? (
        alimentos.map((alimento) => (
          <li key={alimento.id_alimento}>
            <div>
              <img src={alimento.imagen_url} alt={alimento.nombre} width="50" />
              <span>{alimento.nombre}</span>
              <button onClick={() => seleccionarAlimento(alimento, dietaId)}>
                Seleccionar
              </button>
            </div>
          </li>
        ))
      ) : (
        <li>No se encontraron alimentos.</li>
      )}
    </ul>
  </div>
);

export default Alimentos
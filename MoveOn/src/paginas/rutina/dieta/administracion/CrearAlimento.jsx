// CrearAlimento.jsx
import React, { useContext } from 'react';
import { contextoAlimentos } from '../../../../contextos/AlimentosContexto';
import "./CrearAlimento.css";

const CrearAlimento = () => {
  const { datosFormulario, guardarCreacion, errorAlimento } = useContext(contextoAlimentos);

  return (
    <div>
      <div className="crear-alimento">
        {/* Se muestra el error, en caso de existir */}
        {errorAlimento && <p className="error">{errorAlimento}</p>}
        
        <label><strong>Imagen </strong>
          <input
            type="text"
            name="imagen_url"
            onChange={(e) => datosFormulario(e, "nuevo")}
          />
        </label>

        <label><strong>Nombre </strong>
          <input
            type="text"
            name="nombre"
            onChange={(e) => datosFormulario(e, "nuevo")}
          />
        </label>

        <label><strong>Kg </strong>
          <input
            type="number"
            name="peso_kg"
            onChange={(e) => datosFormulario(e, "nuevo")}
          />
        </label>

        <label><strong>Precio </strong>
          <input
            type="number"
            name="precio_euros"
            onChange={(e) => datosFormulario(e, "nuevo")}
            step="0.01"
          />
        </label>

        <label><strong>Descripción </strong>
          <input
            type="text"
            name="descripcion"
            onChange={(e) => datosFormulario(e, "nuevo")}
          />
        </label>

        <label><strong>Código </strong>
          <input
            type="text"
            name="codigo_barras"
            onChange={(e) => datosFormulario(e, "nuevo")}
          />
        </label>

        <label><strong>Categorías </strong>
          <input
            type="text"
            name="categoria"
            onChange={(e) => datosFormulario(e, "nuevo")}
          />
        </label>

        <label><strong>Hidratos</strong>
          <input
            type="number"
            name="hidratos"
            onChange={(e) => datosFormulario(e, "nuevo")}
          />
        </label>

        <label><strong>Grasas</strong>
          <input
            type="number"
            name="grasas"
            onChange={(e) => datosFormulario(e, "nuevo")}
          />
        </label>

        <label><strong>Proteinas</strong>
          <input
            type="number"
            name="proteinas"
            onChange={(e) => datosFormulario(e, "nuevo")}
          />
        </label>

        <label><strong>Calorias</strong>
          <input
            type="number"
            name="calorias"
            onChange={(e) => datosFormulario(e, "nuevo")}
          />
        </label>

        <div className="admin-botones">
          <button onClick={guardarCreacion}>Guardar</button>
        </div>
        {/* Aquí podrías agregar más funcionalidades, como vista previa del alimento, etc. */}
      </div>
    </div>
  );
};

export default CrearAlimento;

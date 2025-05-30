import React from 'react';
import useAppContext from '../../../../hooks/useAppContext';
import "./CrearAlimento.css";

const CrearAlimento = () => {
  // Extraemos el contexto de alimentos del hook centralizado
  const { alimentos } = useAppContext();
  const { admin, errorAlimento, nuevoAlimento, actualizarNuevoAlimento, guardarCreacion } = alimentos;

  return (
    <>
      {admin && (
        <div>
          <div className="crear-alimento">
            {errorAlimento && <p className="error">{errorAlimento}</p>}
            
            <label>
              <strong>Imagen </strong>
              <input
                type="text"
                name="imagen_url"
                value={nuevoAlimento.imagen_url}
                placeholder="URL de la imagen"
                onChange={actualizarNuevoAlimento}
              />
            </label>
      
            <label>
              <strong>Nombre </strong>
              <input
                type="text"
                name="nombre"
                value={nuevoAlimento.nombre}
                placeholder="nombre del alimento"
                onChange={actualizarNuevoAlimento}
              />
            </label>
            <br/><br/>
            <label>
              <strong>Kg </strong>
              <input
                type="number"
                name="peso_kg"
                value={nuevoAlimento.peso_kg}
                min="0"
                onChange={actualizarNuevoAlimento}
                step="0.1"
              />
            </label>
            <label>
              <strong>Precio </strong>
              <input
                type="number"
                name="precio_euros"
                value={nuevoAlimento.precio_euros}
                min="0"
                onChange={actualizarNuevoAlimento}
                step="0.1"
              />
            </label>
            <br/><br/>
            <label>
              <strong>Descripción </strong>
              <input
                type="text"
                name="descripcion"
                value={nuevoAlimento.descripcion}
                placeholder="descripción"
                onChange={actualizarNuevoAlimento}
              />
            </label>
      
            <label>
              <strong>Código </strong>
              <input
                type="text"
                name="codigo_barras"
                value={nuevoAlimento.codigo_barras}
                placeholder="código de barras"
                onChange={actualizarNuevoAlimento}
              />
            </label>
            <label>
              <strong>Categorías </strong>
              <input
                type="text"
                name="categoria"
                value={nuevoAlimento.categoria}
                placeholder="categoría"
                onChange={actualizarNuevoAlimento}
              />
            </label>
            <br/><br/>
            <label>
              <strong>Hidratos</strong>
              <input
                type="number"
                name="hidratos"
                value={nuevoAlimento.hidratos}
                min="0"
                onChange={actualizarNuevoAlimento}
                step="0.1"
              />
            </label>
      
            <label>
              <strong>Grasas</strong>
              <input
                type="number"
                name="grasas"
                value={nuevoAlimento.grasas}
                min="0"
                onChange={actualizarNuevoAlimento}
                step="0.1"
              />
            </label>
      
            <label>
              <strong>Proteinas</strong>
              <input
                type="number"
                name="proteinas"
                value={nuevoAlimento.proteinas}
                min="0"
                onChange={actualizarNuevoAlimento}
                step="0.1"
              />
            </label>
      
            <label>
              <strong>Calorias</strong>
              <input
                type="number"
                name="calorias"
                value={nuevoAlimento.calorias}
                min="0"
                onChange={actualizarNuevoAlimento}
                step="0.1"
              />
            </label>
            <br/><br/>
            <div className="admin-botones">
              <button onClick={guardarCreacion}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CrearAlimento;

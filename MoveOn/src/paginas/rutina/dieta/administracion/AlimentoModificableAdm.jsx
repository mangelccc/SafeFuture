import React from "react";
import useAppContext from "../../../../hooks/useAppContext.jsx";
import "./AlimentoAdm.css";

const AlimentoModificableAdm = ({ alimento }) => {
    // Extraemos el contexto de alimentos del hook centralizado
    const { alimentos } = useAppContext();
    const { guardarEdicion, cancelarEdicion, alimentoEditado, actualizarAlimentoEditado } = alimentos;

    return (
        <div key={alimento.id} className="alimento">
            <div className="admin-datosalimento">
                <label>
                    <strong>Imagen: </strong>
                    <input 
                        type="text" 
                        name="imagen_url"
                        value={alimentoEditado?.imagen_url || ""} 
                        onChange={actualizarAlimentoEditado} 
                    />
                </label>

                <label>
                    <strong>Nombre: </strong>
                    <input 
                        type="text" 
                        name="nombre"
                        value={alimentoEditado?.nombre || ""} 
                        onChange={actualizarAlimentoEditado} 
                    />
                </label>

                <label>
                    <strong>Kg: </strong>
                    <input 
                        type="number" 
                        name="peso_kg"
                        value={alimentoEditado?.peso_kg || ""} 
                        onChange={actualizarAlimentoEditado} 
                    />
                </label>

                <label>
                    <strong>Precio: </strong>
                    <input 
                        type="number" 
                        name="precio_euros"
                        value={alimentoEditado?.precio_euros || ""} 
                        onChange={actualizarAlimentoEditado} 
                        step="0.01" 
                    />
                </label>

                <label>
                    <strong>Descripción: </strong>
                    <input 
                        type="text" 
                        name="descripcion"
                        value={alimentoEditado?.descripcion || ""} 
                        onChange={actualizarAlimentoEditado} 
                    />
                </label>

                <label>
                    <strong>Código: </strong>
                    <input 
                        type="text" 
                        name="codigo_barras"
                        value={alimentoEditado?.codigo_barras || ""} 
                        onChange={actualizarAlimentoEditado} 
                    />
                </label>

                <label>
                    <strong>Categorías: </strong>
                    <input 
                        type="text" 
                        name="categoria"
                        value={alimentoEditado?.categoria || ""} 
                        onChange={actualizarAlimentoEditado} 
                    />
                </label>
                <div className="macros-admin">
                    <label>
                        <strong>H:</strong>
                        <input 
                            type="number" 
                            name="hidratos"
                            value={alimentoEditado?.hidratos || ""} 
                            onChange={actualizarAlimentoEditado} 
                        />
                    </label>

                    <label>
                        <strong>G:</strong>
                        <input 
                            type="number" 
                            name="grasas"
                            value={alimentoEditado?.grasas || ""} 
                            onChange={actualizarAlimentoEditado} 
                        />
                    </label>

                    <label>
                        <strong>P:</strong>
                        <input 
                            type="number" 
                            name="proteinas"
                            value={alimentoEditado?.proteinas || ""} 
                            onChange={actualizarAlimentoEditado} 
                        />
                    </label>

                    <label>
                        <strong>C:</strong>
                        <input 
                            type="number" 
                            name="calorias"
                            value={alimentoEditado?.calorias || ""} 
                            onChange={actualizarAlimentoEditado} 
                        />
                    </label>
                </div>
            </div>
            <div className="admin-botones">
                <button onClick={guardarEdicion}>Guardar</button>
                <button onClick={cancelarEdicion}>Cancelar</button>
            </div>
        </div>
    );
};

export default AlimentoModificableAdm;

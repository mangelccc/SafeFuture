import React, { useContext } from "react";
import { contextoAlimentos } from "../../../../../contextos/AlimentosContexto.jsx";
import "./AlimentoAdm.css"

const AlimentoModificableAdm = ({ alimento }) => {
    const {
        guardarEdicion,
        cancelarEdicion,
        alimentoEditado,
        datosFormulario,
    } = useContext(contextoAlimentos);

    console.log("Estado actual de alimentoEditado:", alimentoEditado);

    return (
        <div key={alimento.id} className="alimento">
            <div className="admin-datosalimento">
                <label><strong>Imagen: </strong>
                    <input 
                        type="text" 
                        name="imagen_url"
                        value={alimentoEditado?.imagen_url || ""} 
                        onChange={datosFormulario} 
                    />
                </label>

                <label><strong>Nombre: </strong>
                    <input 
                        type="text" 
                        name="nombre"
                        value={alimentoEditado?.nombre || ""} 
                        onChange={datosFormulario} 
                    />
                </label>

                <label><strong>Kg: </strong>
                    <input 
                        type="number" 
                        name="peso_kg"
                        value={alimentoEditado?.peso_kg || ""} 
                        onChange={datosFormulario} 
                    />
                </label>

                <label><strong>Precio: </strong>
                    <input 
                        type="number" 
                        name="precio_euros"
                        value={alimentoEditado?.precio_euros || ""} 
                        onChange={datosFormulario} 
                        step="0.01" 
                    />
                </label>

                <label><strong>Descripción: </strong>
                    <input 
                        type="text" 
                        name="descripcion"
                        value={alimentoEditado?.descripcion || ""} 
                        onChange={datosFormulario} 
                    />
                </label>

                <label><strong>Código: </strong>
                    <input 
                        type="text" 
                        name="codigo_barras"
                        value={alimentoEditado?.codigo_barras || ""} 
                        onChange={datosFormulario} 
                    />
                </label>

                <label><strong>Categorías: </strong>
                    <input 
                        type="text" 
                        name="categoria"
                        value={alimentoEditado?.categoria || ""} 
                        onChange={datosFormulario} 
                    />
                </label>
                <div className="macros-admin">
                <label><strong>H:</strong>
                    <input 
                        type="number" 
                        name="hidratos"
                        value={alimentoEditado?.hidratos || ""} 
                        onChange={datosFormulario} 
                    />
                </label>

                <label><strong>G:</strong>
                    <input 
                        type="number" 
                        name="grasas"
                        value={alimentoEditado?.grasas || ""} 
                        onChange={datosFormulario} 
                    />
                </label>

                <label><strong>P:</strong>
                    <input 
                        type="number" 
                        name="proteinas"
                        value={alimentoEditado?.proteinas || ""} 
                        onChange={datosFormulario} 
                    />
                </label>

                <label><strong>C:</strong>
                    <input 
                        type="number" 
                        name="calorias"
                        value={alimentoEditado?.calorias || ""} 
                        onChange={datosFormulario} 
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
}

export default AlimentoModificableAdm;

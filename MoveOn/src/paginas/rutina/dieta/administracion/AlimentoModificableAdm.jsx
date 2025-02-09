import React, { useContext } from "react";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";
import "./AlimentoAdm.css"

const AlimentoModificableAdm = ({ alimento }) => {
    const {
        guardarEdicion,
        cancelarEdicion,
        alimentoEditado,
        datosFormulario,
    } = useContext(contextoAlimentos);

    return (
        <div key={alimento.id} className="alimento">
            <div className="admin-datosalimento">
                <label><strong>Imagen: </strong>
                    <input 
                        type="text" 
                        name="imagen_url"
                        value={alimentoEditado?.imagen_url || ""} 
                        onChange={(e) => datosFormulario(e, "editado")} 
                    />
                </label>

                <label><strong>Nombre: </strong>
                    <input 
                        type="text" 
                        name="nombre"
                        value={alimentoEditado?.nombre || ""} 
                        onChange={(e) => datosFormulario(e, "editado")} 
                    />
                </label>

                <label><strong>Kg: </strong>
                    <input 
                        type="number" 
                        name="peso_kg"
                        value={alimentoEditado?.peso_kg || ""} 
                        onChange={(e) => datosFormulario(e, "editado")} 
                    />
                </label>

                <label><strong>Precio: </strong>
                    <input 
                        type="number" 
                        name="precio_euros"
                        value={alimentoEditado?.precio_euros || ""} 
                        onChange={(e) => datosFormulario(e, "editado")} 
                        step="0.01" 
                    />
                </label>

                <label><strong>Descripción: </strong>
                    <input 
                        type="text" 
                        name="descripcion"
                        value={alimentoEditado?.descripcion || ""} 
                        onChange={(e) => datosFormulario(e, "editado")} 
                    />
                </label>

                <label><strong>Código: </strong>
                    <input 
                        type="text" 
                        name="codigo_barras"
                        value={alimentoEditado?.codigo_barras || ""} 
                        onChange={(e) => datosFormulario(e, "editado")} 
                    />
                </label>

                <label><strong>Categorías: </strong>
                    <input 
                        type="text" 
                        name="categoria"
                        value={alimentoEditado?.categoria || ""} 
                        onChange={(e) => datosFormulario(e, "editado")} 
                    />
                </label>
                <div className="macros-admin">
                    <label><strong>H:</strong>
                        <input 
                            type="number" 
                            name="hidratos"
                            value={alimentoEditado?.hidratos || ""} 
                            onChange={(e) => datosFormulario(e, "editado")} 
                        />
                    </label>

                    <label><strong>G:</strong>
                        <input 
                            type="number" 
                            name="grasas"
                            value={alimentoEditado?.grasas || ""} 
                            onChange={(e) => datosFormulario(e, "editado")} 
                        />
                    </label>

                    <label><strong>P:</strong>
                        <input 
                            type="number" 
                            name="proteinas"
                            value={alimentoEditado?.proteinas || ""} 
                            onChange={(e) => datosFormulario(e, "editado")} 
                        />
                    </label>

                    <label><strong>C:</strong>
                        <input 
                            type="number" 
                            name="calorias"
                            value={alimentoEditado?.calorias || ""} 
                            onChange={(e) => datosFormulario(e, "editado")} 
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

import React, {useContext} from 'react';
import { contextoAlimentos } from '../../../../contextos/AlimentosContexto';
import "./CrearAlimento.css";

const CrearAlimento = () => {

    const {
        datosFormulario,
        guardarCreacion,
        cancelarCreacion,
    } = useContext(contextoAlimentos);

    return (
        <div>
            <div className="crear-alimento">
                <label><strong>Imagen: </strong>
                    <input 
                        type="text" 
                        name="imagen_url"
                        onChange={(e) => datosFormulario(e, "nuevo")} 
                    />
                </label>

                <label><strong>Nombre: </strong>
                    <input 
                        type="text" 
                        name="nombre"
                        onChange={(e) => datosFormulario(e, "nuevo")} 
                    />
                </label>

                <label><strong>Kg: </strong>
                    <input 
                        type="number" 
                        name="peso_kg"
                        onChange={(e) => datosFormulario(e, "nuevo")} 
                    />
                </label>

                <label><strong>Precio: </strong>
                    <input 
                        type="number" 
                        name="precio_euros"
                        onChange={(e) => datosFormulario(e, "nuevo")} 
                        step="0.01" 
                    />
                </label>

                <label><strong>Descripción: </strong>
                    <input 
                        type="text" 
                        name="descripcion"
                        onChange={(e) => datosFormulario(e, "nuevo")} 
                    />
                </label>

                <label><strong>Código: </strong>
                    <input 
                        type="text" 
                        name="codigo_barras"
                        onChange={(e) => datosFormulario(e, "nuevo")} 
                    />
                </label>

                <label><strong>Categorías: </strong>
                    <input 
                        type="text" 
                        name="categoria"
                        onChange={(e) => datosFormulario(e, "nuevo")} 
                    />
                </label>
                <label><strong>H:</strong>
                    <input 
                        type="number" 
                        name="hidratos"
                        onChange={(e) => datosFormulario(e, "nuevo")} 
                    />
                </label>

                <label><strong>G:</strong>
                    <input 
                        type="number" 
                        name="grasas"
                        onChange={(e) => datosFormulario(e, "nuevo")} 
                    />
                </label>

                <label><strong>P:</strong>
                    <input 
                        type="number" 
                        name="proteinas"
                        onChange={(e) => datosFormulario(e, "nuevo")} 
                    />
                </label>

                <label><strong>C:</strong>
                    <input 
                        type="number" 
                        name="calorias"
                        onChange={(e) => datosFormulario(e, "nuevo")} 
                    />
                </label>
                <div className="admin-botones">
                <button onClick={guardarCreacion}>Guardar</button>
            </div>
            </div>
        </div>
    );
};

export default CrearAlimento;
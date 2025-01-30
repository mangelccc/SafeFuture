import React, {useContext} from "react";
import { contextoAlimentos } from "../../../../../contextos/AlimentosContexto.jsx";

const AlimentoModificableAdm = ({ alimento }) => {

    const {
        guardarEdicion,
        cancelarEdicion,
        alimentoEditado,
        datosFormulario,
    } = useContext(contextoAlimentos);

    return (
        <>
            <div key={alimento.id} className="aimento-admin">
                <div className="admin-datosalimento">
                    <label><strong>Imagen:</strong>
                        <input type="text" value={alimentoEditado.imagen_url} onChange={datosFormulario} />
                    </label>

                    <label><strong>Nombre:</strong>
                        <input type="text" value={alimentoEditado.nombre} onChange={datosFormulario}/>
                    </label>

                    <label><strong>Kg:</strong>
                        <input type="number" value={alimentoEditado.peso_kg} onChange={datosFormulario}/>
                    </label>

                    <label><strong>Precio:</strong>
                        <input type="number" value={alimentoEditado.precio_euros} onChange={datosFormulario} step="0.01" />
                    </label>

                    <label><strong>Descripción:</strong>
                        <input type="text" value={alimentoEditado.descripcion} onChange={datosFormulario} />
                    </label>

                    <label><strong>Código:</strong>
                        <input type="text" value={alimentoEditado.codigo_barras} onChange={datosFormulario} />
                    </label>

                    <label><strong>Categorías:</strong>
                        <input type="text" value={alimentoEditado.categoria} onChange={datosFormulario} />
                    </label>

                    <label><strong>H:</strong>
                        <input type="number" value={alimentoEditado.hidratos} onChange={datosFormulario} step="0.1" />
                    </label>

                    <label><strong>G:</strong>
                        <input type="number" value={alimentoEditado.grasas} onChange={datosFormulario} step="0.1" />
                    </label>

                    <label><strong>P:</strong>
                        <input type="number" value={alimentoEditado.proteinas} onChange={datosFormulario} step="0.1" />
                    </label>

                    <label><strong>C:</strong>
                        <input type="number" value={alimentoEditado.calorias} onChange={datosFormulario} step="0.1" />
                    </label>

                </div>
                <div className="admin-botones">
                    <button onClick={guardarEdicion}>Guardad</button>
                    <button onClick={cancelarEdicion}>Cancelar</button>
                </div>
            </div>
        </>
    );
}

export default AlimentoModificableAdm;
import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import useAppContext from '../../../../hooks/useAppContext.jsx';
import { calcularMacronutrientes } from "../../../../bibliotecas/biblioteca.js";

const SeleccionarAlimentos = () => {
    const { id } = useParams();
    const { alimentos, auth, dietas } = useAppContext();
    const { 
        guardarAlimentosEnDietaPersonalizada,
        seleccionarAlimento,
        alimentosSeleccionados,
        aumentarCantidad,
        disminuirCantidad,
        eliminarAlimento,
        filtros,
        busqueda,
        buscarAlimento,
        alimentosFiltrados,
        actualizarFiltro } = alimentos;
    const { usuario } = auth;
    const { dietasUsuario } = dietas;

    
    // Encontrar la dieta actual según id y extraer datos
    const dietaActual = dietasUsuario.filter((dieta) => dieta.pivot.id_dieta === id);

    const datosUsuario = {
        peso: dietaActual[0].pivot.peso_usuario,
        altura: dietaActual[0].pivot.altura_usuario,
        edad: usuario.edad,
        sexo: usuario.sexo,
        actividad: dietaActual[0].pivot.actividad_fisica,
        objetivo: dietaActual[0].pivot.objetivo
    };

    // Objetivos de macronutrientes calculados (diarios)
    const macronutrientesObjetivos = calcularMacronutrientes(datosUsuario);

    // Función para calcular los macros acumulados a partir de los alimentos seleccionados
    const calcularMacros = () => {
        console.log("calculando macros")
        return alimentosSeleccionados.reduce((acc, item) => {
            // Se multiplica cada macronutriente por la cantidad seleccionada para ese alimento.
            acc.proteinas += parseFloat(item.proteinas) * item.cantidad;
            acc.carbohidratos += parseFloat(item.carbohidratos) * item.cantidad;
            acc.grasas += parseFloat(item.grasas) * item.cantidad;
            acc.calorias += parseFloat(item.calorias) * item.cantidad;
            return acc;
        }, { proteinas: 0, carbohidratos: 0, grasas: 0, calorias: 0 });
    };

    const macrosAcumulados = calcularMacros();

    // Función para comparar y asignar color de semáforo según diferencia
    const compararConObjetivos = (valor, objetivo) => {
        console.log("comparando objetivos para colores")
        const diferencia = Math.abs(valor - objetivo);
        if (diferencia <= objetivo * 0.1) return "green";       // Dentro de ±10%
        else if (diferencia <= objetivo * 0.2) return "orange";   // Entre 10% y 20%
        else return "red";                                       // Más de 20% de diferencia
    };


    // Comparar valores con objetivos
    const estadoCalorias = compararConObjetivos(macrosAcumulados.calorias, macronutrientesObjetivos.caloriasObjetivo);
    const estadoProteinas = compararConObjetivos(macrosAcumulados.proteinas, macronutrientesObjetivos.proteinas);
    const estadoCarbohidratos = compararConObjetivos(macrosAcumulados.carbohidratos, macronutrientesObjetivos.carbohidratos);
    const estadoGrasas = compararConObjetivos(macrosAcumulados.grasas, macronutrientesObjetivos.grasas);



    return (
        <div>
            {/* Buscador */}
            <div>
                <label>Buscador: </label>
                <input
                    type="text"
                    placeholder="Buscar alimento..."
                    value={busqueda}
                    onChange={(e) => buscarAlimento(e.target.value)}
                />
            </div>

            {/* Filtros */}
            <div>
    <label>Categoria: </label>
    <select
        onChange={(e) => actualizarFiltro('categoria', e.target.value)}
        value={filtros.categoria}
    >
        <option value="">Todas</option>
        <option value="Proteínas">Proteínas</option>
        <option value="Carbohidratos">Carbohidratos</option>
        <option value="Grasas">Grasas</option>
        <option value="Vitaminas">Vitaminas</option>
    </select>

    <label>Carbohidratos:</label>
    <input
        type="number"
        value={filtros.minCarbohidratos}
        onChange={(e) => actualizarFiltro('minCarbohidratos', Number(e.target.value))}
    />
    <input
        type="number"
        value={filtros.maxCarbohidratos}
        onChange={(e) => actualizarFiltro('maxCarbohidratos', Number(e.target.value))}
    />

    <label>Proteínas:</label>
    <input
        type="number"
        value={filtros.minProteinas}
        onChange={(e) => actualizarFiltro('minProteinas', Number(e.target.value))}
    />
    <input
        type="number"
        value={filtros.maxProteinas}
        onChange={(e) => actualizarFiltro('maxProteinas', Number(e.target.value))}
    />
</div>

            {/* Lista de Alimentos */}
            <div>
                <h3>Alimentos</h3>
                <ul>
                    {Array.isArray(alimentosFiltrados) && alimentosFiltrados.length > 0
                        ? alimentosFiltrados.map((alimento) => (
                            <li key={alimento.id_alimento}>
                                <div>
                                    <img src={alimento.imagen_url} alt={alimento.nombre} width="50" />
                                    <span>{alimento.nombre}</span>
                                    <button onClick={() => seleccionarAlimento(alimento, id)}>Seleccionar</button>
                                </div>
                            </li>
                        ))
                        : <li>No se encontraron alimentos.</li>
                    }
                </ul>
            </div>

            {/* Tabla de Macros (Semáforo) */}
            <div className='my-10'>

                <table>
                    <thead>
                        <tr>
                            <th colSpan="4">Macros Recomendados</th>
                        </tr>
                        <tr>
                            <th>Carbohidratos</th>
                            <th>Proteínas</th>
                            <th>Grasas</th>
                            <th>Calorías</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{macronutrientesObjetivos.carbohidratos}g</td>
                            <td>{macronutrientesObjetivos.proteinas}g</td>
                            <td>{macronutrientesObjetivos.grasas}g</td>
                            <td>{macronutrientesObjetivos.caloriasObjetivo} kcal</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h3>Calorías: {macrosAcumulados.calorias} <span style={{ color: estadoCalorias }}>●</span></h3>
                    <h3>Proteínas: {macrosAcumulados.proteinas}g <span style={{ color: estadoProteinas }}>●</span></h3>
                    <h3>Carbohidratos: {macrosAcumulados.carbohidratos}g <span style={{ color: estadoCarbohidratos }}>●</span></h3>
                    <h3>Grasas: {macrosAcumulados.grasas.toFixed(2)}g <span style={{ color: estadoGrasas }}>●</span></h3>
                </div>
            </div>

            {/* Tabla de alimentos seleccionados */}
            {alimentosSeleccionados.length > 0 && (
                <div>

                    <table>
                        <thead>
                            <tr>
                                <th colSpan="3">Alimentos Seleccionados</th>
                            </tr>
                            <tr>
                                <th>Alimento</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alimentosSeleccionados.map((item) => (
                                <tr key={item.id_alimento}>
                                    <td>{item.nombre}</td>
                                    <td>{item.cantidad}</td>
                                    <td>
                                        <button onClick={() => aumentarCantidad(item.id_alimento)}>+</button>
                                        <button onClick={() => disminuirCantidad(item.id_alimento)}>-</button>
                                        <button onClick={() => eliminarAlimento(item.id_alimento)}>🗑️</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Botón para guardar cambios */}
            <div style={{ marginTop: "20px" }}>
                <button onClick={() => {
                    // El id de la dieta (extraído de useParams)
                    guardarAlimentosEnDietaPersonalizada(id)
                }}>
                    Guardar cambios
                </button>
            </div>

        </div>
    );
};

export default SeleccionarAlimentos;

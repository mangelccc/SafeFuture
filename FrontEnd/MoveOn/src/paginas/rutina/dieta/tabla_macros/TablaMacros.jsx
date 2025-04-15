import React from 'react'

const TablaMacros = ({ objetivos, macrosAcumulados, estados }) => (
    <div className="tabla-macros my-10">
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
            <td>{objetivos.carbohidratos}g</td>
            <td>{objetivos.proteinas}g</td>
            <td>{objetivos.grasas}g</td>
            <td>{objetivos.caloriasObjetivo} kcal</td>
          </tr>
        </tbody>
      </table>
      <div className="macros-acumulados">
        <h3>
          Calorías: {macrosAcumulados.calorias}{" "}
          <span style={{ color: estados.calorias }}>●</span>
        </h3>
        <h3>
          Proteínas: {macrosAcumulados.proteinas}g{" "}
          <span style={{ color: estados.proteinas }}>●</span>
        </h3>
        <h3>
          Carbohidratos: {macrosAcumulados.carbohidratos}g{" "}
          <span style={{ color: estados.carbohidratos }}>●</span>
        </h3>
        <h3>
          Grasas: {macrosAcumulados.grasas.toFixed(2)}g{" "}
          <span style={{ color: estados.grasas }}>●</span>
        </h3>
      </div>
    </div>
  );

export default TablaMacros
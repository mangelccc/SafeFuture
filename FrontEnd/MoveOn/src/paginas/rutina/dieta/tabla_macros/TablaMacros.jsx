import React from 'react'

const TablaMacros = ({ objetivos, macrosAcumulados, estados }) => {
  return (
    <div className="tabla-macros my-10 bg-turq p-4 rounded-lg shadow-lg">
      <h2 className='text-center text-2xl font-bold pb-2'>Macros Acumulados</h2>
      <table className='w-full shadow-lg'>
        <thead>
          <tr className='bg-black1 text-white'>
            <th colSpan={1}></th>
            <th className='px-4 py-2'>Objetivos de tu dieta</th>
            <th>Macros actuales</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white2 border-b-2 border-white3'>
            <td className='ps-2 px-4 py-2'>Proteínas</td>
            <td className='text-center'>{objetivos.proteinas} g</td>
            <td className='text-center'>{macrosAcumulados.proteinas.toFixed(2)} g <span style={{ color: estados.proteinas }}>●</span></td>
          </tr>
          <tr className='bg-white2 border-b-2 border-white3'>
            <td className='ps-2 px-4 py-2'>Carbohidratos</td>
            <td className='text-center'>{objetivos.carbohidratos} g</td>
            <td className='text-center'>{macrosAcumulados.carbohidratos.toFixed(2)} g <span style={{ color: estados.carbohidratos }}>●</span></td>
          </tr>
          <tr className='bg-white2 border-b-2 border-white3'>
            <td className='ps-2 px-4 py-2'>Grasas</td>
            <td className='text-center'>{objetivos.grasas} g</td>
            <td className='text-center'>{macrosAcumulados.grasas.toFixed(2)} g <span style={{ color: estados.grasas }}>●</span></td>
          </tr>
          <tr className='bg-white2'>
            <td className='ps-2 px-4 py-2'>Calorías</td>
            <td className='text-center'>{objetivos.caloriasObjetivo} kcal</td>
            <td className='text-center'>{macrosAcumulados.calorias.toFixed(2)} kcal <span style={{ color: estados.calorias }}>●</span></td>
            
          </tr>
        </tbody>
      </table>
      
    </div>
  )
};

export default TablaMacros
import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import useAppContext from '../../../../hooks/useAppContext.jsx';
import { calcularMacronutrientes } from "../../../../bibliotecas/biblioteca.js";
import BuscadorAlimentos from './BuscadorAlimentos.jsx';
import FiltrosAlimentos from './FiltrosAlimentos.jsx';
import Alimentos from './Alimentos.jsx';
import TablaMacros from '../tabla_macros/TablaMacros.jsx';
import AlimentosSeleccionados from './AlimentosSeleccionados.jsx';

const AlimentosDieta = () => {
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
    actualizarFiltro,
    obtenerAlimentosDieta
  } = alimentos;
  const { usuario } = auth;
  const { dietasUsuario } = dietas;

  // Buscamos la dieta
  const dietaActual = dietasUsuario.find(d => d.pivot.id_dieta === id);
  if (!dietaActual) return <p>Dieta no encontrada.</p>;

  // Datos para macros objetivo
  const datosUsuario = {
    peso: dietaActual.pivot.peso_usuario,
    altura: dietaActual.pivot.altura_usuario,
    edad: usuario.edad,
    sexo: usuario.sexo,
    actividad: dietaActual.pivot.actividad_fisica,
    objetivo: dietaActual.pivot.objetivo,
  };
  const macronutrientesObjetivos = calcularMacronutrientes(datosUsuario);

  useEffect(() => {
    if (id) obtenerAlimentosDieta(id);
  }, [id]);

  // Cálculo directo de macros 
  const macrosAcumulados = alimentosSeleccionados.reduce(
    (acc, item) => {
      acc.proteinas += parseFloat(item.proteinas) * item.cantidad;
      acc.carbohidratos += parseFloat(item.carbohidratos) * item.cantidad;
      acc.grasas += parseFloat(item.grasas) * item.cantidad;
      acc.calorias += parseFloat(item.calorias) * item.cantidad;
      return acc;
    },
    { proteinas: 0, carbohidratos: 0, grasas: 0, calorias: 0 }
  );

  // Estados sin memo
  const compararConObjetivos = (valor, objetivo) => {
    const diff = Math.abs(valor - objetivo);
    if (diff <= objetivo * 0.1) return "green";
    if (diff <= objetivo * 0.2) return "orange";
    return "red";
  };

  const estados = {
    calorias: compararConObjetivos(macrosAcumulados.calorias, macronutrientesObjetivos.caloriasObjetivo),
    proteinas: compararConObjetivos(macrosAcumulados.proteinas, macronutrientesObjetivos.proteinas),
    carbohidratos: compararConObjetivos(macrosAcumulados.carbohidratos, macronutrientesObjetivos.carbohidratos),
    grasas: compararConObjetivos(macrosAcumulados.grasas, macronutrientesObjetivos.grasas),
  };

  return (
    <div className="seleccionar-alimentos">
      <h2 className='p-0 dark:text-gold underline underline-offset-3 decoration-turq hsm:p-4 sm:mb-4'>Seleccionar Alimentos para la Dieta</h2>
      <div className='bg-purple p-5 mt-2 sm:rounded-lg'>
        <BuscadorAlimentos busqueda={busqueda} buscarAlimento={buscarAlimento} />
        <FiltrosAlimentos filtros={filtros} actualizarFiltro={actualizarFiltro} />
      </div>
      <Alimentos
        alimentos={alimentosFiltrados}
        seleccionarAlimento={seleccionarAlimento}
        dietaId={id}
      />
      <TablaMacros
        objetivos={macronutrientesObjetivos}
        macrosAcumulados={macrosAcumulados}
        estados={estados}
      />
      <AlimentosSeleccionados
        alimentosSeleccionados={alimentosSeleccionados}
        aumentarCantidad={aumentarCantidad}
        disminuirCantidad={disminuirCantidad}
        eliminarAlimento={eliminarAlimento}
      />
      <div className='flex hsm:flex-col justify-center items-center hsm:mb-10 gap-6'>
        <button className='bg-gold dark:text-black text-lg font-bold py-2 px-4 hsm:w-full sm:w-1/3 sm:m-auto rounded-lg cursor-pointer transition-all duration-300 hover:text-white dark:hover:text-white hover:bg-purple hover:shadow-lg' onClick={() => guardarAlimentosEnDietaPersonalizada(id)}>
          Guardar cambios
        </button>
        <Link to={`/rutina/dietas/${id}/detalles`} className='hsm:w-full sm:w-1/3 sm:m-auto'>
          <button className='bg-purple dark:text-white text-lg font-bold py-2 px-4 hsm:w-full rounded-lg cursor-pointer transition-all duration-300 hover:text-black dark:hover:text-black active:hover:text-black hover:bg-white2 active:bg-white2 hover:shadow-lg'>
            Ver los detalles de la dieta
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AlimentosDieta;
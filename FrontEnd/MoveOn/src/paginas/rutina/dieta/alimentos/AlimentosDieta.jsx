// src/components/AlimentosDieta.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAppContext from '../../../../hooks/useAppContext.jsx';
import {
  calcularMacronutrientes,
  calcularMacrosAcumulados,
  compararConObjetivos
} from '../../../../bibliotecas/biblioteca.js';
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

  // Buscamos la dieta actual
  const dietaActual = dietasUsuario.find(d => d.pivot.id_dieta === id);
  if (!dietaActual) return <p>Dieta no encontrada.</p>;

  // Datos usuario para macros objetivo
  const datosUsuario = {
    peso: dietaActual.pivot.peso_usuario,
    altura: dietaActual.pivot.altura_usuario,
    edad: usuario.edad,
    sexo: usuario.sexo,
    actividad: dietaActual.pivot.actividad_fisica,
    objetivo: dietaActual.pivot.objetivo
  };

  // Calculamos objetivos y macros acumulados
  const macronutrientesObjetivos = calcularMacronutrientes(datosUsuario);
  const macrosAcumulados = calcularMacrosAcumulados(alimentosSeleccionados);

  // Estados de color según cercanía al objetivo
  const estados = {
    calorias: compararConObjetivos(macrosAcumulados.calorias, macronutrientesObjetivos.caloriasObjetivo),
    proteinas: compararConObjetivos(macrosAcumulados.proteinas, macronutrientesObjetivos.proteinas),
    carbohidratos: compararConObjetivos(macrosAcumulados.carbohidratos, macronutrientesObjetivos.carbohidratos),
    grasas: compararConObjetivos(macrosAcumulados.grasas, macronutrientesObjetivos.grasas)
  };

  // Cargamos alimentos de la dieta al montar/comparir id
  useEffect(() => {
    if (id) obtenerAlimentosDieta(id);
  }, [id]);

  return (
    <div className="seleccionar-alimentos">
      <h2 className="p-0 dark:text-gold underline underline-offset-3 decoration-turq hsm:p-4 sm:mb-4">
        Filtros para encontrar tus alimentos
      </h2>

      <div className="bg-purple p-5 mt-2 sm:rounded-lg">
        <BuscadorAlimentos
          busqueda={busqueda}
          buscarAlimento={buscarAlimento}
        />
        <FiltrosAlimentos
          filtros={filtros}
          actualizarFiltro={actualizarFiltro}
        />
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

      <div className="flex hsm:flex-col justify-center items-center hsm:mb-10 gap-6">
        <button
          className="bg-gold dark:text-black text-lg font-bold py-2 px-4 hsm:w-full sm:w-1/3 sm:m-auto rounded-lg cursor-pointer transition-all duration-300 hover:text-white dark:hover:text-white hover:bg-purple hover:shadow-lg"
          onClick={() => guardarAlimentosEnDietaPersonalizada(id)}
        >
          Guardar cambios
        </button>
        <Link
          to={`/rutina/dietas/${id}/detalles`}
          className="hsm:w-full sm:w-1/3 sm:m-auto"
        >
          <button className="bg-purple text-white text-lg font-bold py-2 px-4 hsm:w-full rounded-lg cursor-pointer transition-all duration-300 hover:text-black dark:hover:text-black active:hover:text-black hover:bg-white2 active:bg-white2 hover:shadow-lg">
            Ver los detalles de la dieta
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AlimentosDieta;

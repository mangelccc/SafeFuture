import React, { useMemo } from 'react';
import { useParams, Link } from "react-router-dom";
import useAppContext from '../../../../hooks/useAppContext.jsx';
import { calcularMacronutrientes } from "../../../../bibliotecas/biblioteca.js";
import BuscadorAlimentos from '../buscador/BuscadorAlimentos.jsx';
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
    } = alimentos;
  
    const { usuario } = auth;
    const { dietasUsuario } = dietas;
  
    // Encontrar la dieta actual
    const dietaActual = dietasUsuario.find(
      (dieta) => dieta.pivot.id_dieta === id
    );
    if (!dietaActual) return <p>Dieta no encontrada.</p>;
  
    // Datos de usuario basados en la dieta actual
    const datosUsuario = {
      peso: dietaActual.pivot.peso_usuario,
      altura: dietaActual.pivot.altura_usuario,
      edad: usuario.edad,
      sexo: usuario.sexo,
      actividad: dietaActual.pivot.actividad_fisica,
      objetivo: dietaActual.pivot.objetivo,
    };
  
    // Cálculo de macronutrientes recomendados
    const macronutrientesObjetivos = calcularMacronutrientes(datosUsuario);
  
    // Función para calcular los macros acumulados
    const calcularMacros = () => {
      return alimentosSeleccionados.reduce(
        (acc, item) => {
          acc.proteinas += parseFloat(item.proteinas) * item.cantidad;
          acc.carbohidratos += parseFloat(item.carbohidratos) * item.cantidad;
          acc.grasas += parseFloat(item.grasas) * item.cantidad;
          acc.calorias += parseFloat(item.calorias) * item.cantidad;
          return acc;
        },
        { proteinas: 0, carbohidratos: 0, grasas: 0, calorias: 0 }
      );
    };
  
    const macrosAcumulados = useMemo(() => calcularMacros(), [alimentosSeleccionados]);
  
    // Función para comparar y asignar colores según la cercanía al objetivo
    const compararConObjetivos = (valor, objetivo) => {
      const diferencia = Math.abs(valor - objetivo);
      if (diferencia <= objetivo * 0.1) return "green"; // Dentro de ±10%
      if (diferencia <= objetivo * 0.2) return "orange"; // Entre 10% y 20%
      return "red"; // Más de 20%
    };
  
    const estados = useMemo(
      () => ({
        calorias: compararConObjetivos(macrosAcumulados.calorias, macronutrientesObjetivos.caloriasObjetivo),
        proteinas: compararConObjetivos(macrosAcumulados.proteinas, macronutrientesObjetivos.proteinas),
        carbohidratos: compararConObjetivos(macrosAcumulados.carbohidratos, macronutrientesObjetivos.carbohidratos),
        grasas: compararConObjetivos(macrosAcumulados.grasas, macronutrientesObjetivos.grasas),
      }),
      [macrosAcumulados, macronutrientesObjetivos]
    );
  
    return (
      <div className="seleccionar-alimentos">
        <BuscadorAlimentos busqueda={busqueda} buscarAlimento={buscarAlimento} />
        <FiltrosAlimentos filtros={filtros} actualizarFiltro={actualizarFiltro} />
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
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => guardarAlimentosEnDietaPersonalizada(id)}>
            Guardar cambios
          </button>
        </div>
      </div>
    );
  };
  
  export default AlimentosDieta;
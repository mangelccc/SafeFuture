// src/contextos/AlimentosContexto.jsx
import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAppContext from '../hooks/useAppContext.jsx';
import { validarCreacionAlimento } from "../bibliotecas/biblioteca.js";
import { API_URL } from "../bibliotecas/config.js";
import Swal from "sweetalert2";

const contextoAlimentos = createContext();

const AlimentosContexto = ({ children }) => {
  // Contexto de autenticación
  const { auth } = useAppContext();
  const { sesionIniciada } = auth;

  /*** VALORES INICIALES ***/
  const cadenaVacia = "";
  const listaInicial = [];
  const falso = false;
  const alimentoInicial = {
    id: null,
    nombre: "",
    hidratos: 0,
    grasas: 0,
    proteinas: 0,
    calorias: 0,
    imagen_url: "",
    categoria: "",
    descripcion: "",
    peso_kg: 0,
    precio_euros: 0,
    codigo_barras: "",
  };

  /*** HOOKS DE ESTADO ***/
  const [busqueda, setBusqueda] = useState('');
  const [isSaving, setIsSaving] = useState(falso);
  const [loading, setLoading] = useState(true);
  const [listadoAlimentos, setListadoAlimentos] = useState(listaInicial);
  const [errorAlimento, setErrorAlimento] = useState(cadenaVacia);
  const [alimentosSeleccionados, setAlimentosSeleccionados] = useState(listaInicial);
  const [listaAlimentosDieta, setlistaAlimentosDieta] = useState(listaInicial); // No usado actualmente
  const [filtros, setFiltros] = useState({
    categoria: '',
    minCarbohidratos: 0,
    maxCarbohidratos: 100,
    minProteinas: 0,
    maxProteinas: 100,
    minCalorias: 0,
    maxCalorias: 1000,
    minGrasas: 0,
    maxGrasas: 100,
  });

  /*** HOOKS DE NAVEGACIÓN ***/
  const navegar = useNavigate();
  const cambioDeRuta = useLocation();

  /*** FUNCIONES MEMOIZADAS ***/
  const buscarAlimento = useCallback((termino) => {
    setBusqueda(termino);
  }, []);

  const getAlimentos = useCallback(async () => {
    try {
      setErrorAlimento(cadenaVacia);
      const response = await fetch(`${API_URL}/alimentos`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API: " + response.statusText);
      }
      const data = await response.json();
      setListadoAlimentos(data.alimentos);
    } catch (error) {
      setErrorAlimento("Error al leer los alimentos: " + error.message);
    }
  }, []);

  const guardarAlimentosEnDietaPersonalizada = useCallback(async (id) => {
    if (isSaving) return;
    try {
      setIsSaving(true);
      const payload = {
        id_dieta: id,
        alimentos: alimentosSeleccionados.map(({ id_alimento, cantidad }) => ({ id_alimento, cantidad })),
      };
      const response = await fetch(`${API_URL}/alimento-dieta/multiples`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al guardar cambios.");
      }
      await response.json();
      Swal.fire({
        title: "¡Cambios guardados correctamente!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
      navegar(`/rutina/dietas/${id}/detalles`);
    } catch (error) {
      setErrorAlimento("Error al guardar los alimentos en la dieta: " + error.message);
    } finally {
      setIsSaving(falso);
    }
  }, [alimentosSeleccionados, isSaving, navegar]);

  const obtenerAlimentosDieta = useCallback(async (idDieta) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/alimento-dieta/${idDieta}`);
      if (response.status === 404) {
        setAlimentosSeleccionados(listaInicial);
        return;
      }
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setAlimentosSeleccionados(data);
    } catch (error) {
      setErrorAlimento(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const seleccionarAlimento = useCallback((alimento, idDiet) => {
    setAlimentosSeleccionados(prev => {
      const existe = prev.find(item => item.id_alimento === alimento.id_alimento);
      if (existe) {
        return prev.map(item =>
          item.id_alimento === alimento.id_alimento
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...alimento, cantidad: 1, id_dieta: idDiet }];
    });
  }, []);

  const aumentarCantidad = useCallback((idAlimento) => {
    setAlimentosSeleccionados(prev =>
      prev.map(item =>
        item.id_alimento === idAlimento
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  }, []);

  const disminuirCantidad = useCallback((idAlimento) => {
    setAlimentosSeleccionados(prev =>
      prev
        .map(item => {
          if (item.id_alimento === idAlimento) {
            if (item.cantidad === 1) return null;
            return { ...item, cantidad: item.cantidad - 1 };
          }
          return item;
        })
        .filter(item => item !== null)
    );
  }, []);

  const actualizarFiltro = useCallback((campo, valor) => {
    setFiltros(prev => ({ ...prev, [campo]: valor }));
  }, []);

  const eliminarAlimento = useCallback((idAlimento) => {
    setAlimentosSeleccionados(prev => prev.filter(item => item.id_alimento !== idAlimento));
  }, []);

  /*** MEMO: lista filtrada ***/
  const alimentosFiltrados = useMemo(() => {
    return listadoAlimentos.filter(alimento =>
      alimento.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (filtros.categoria ? alimento.categoria === filtros.categoria : true) &&
      alimento.carbohidratos >= filtros.minCarbohidratos &&
      alimento.carbohidratos <= filtros.maxCarbohidratos &&
      alimento.proteinas >= filtros.minProteinas &&
      alimento.proteinas <= filtros.maxProteinas &&
      alimento.calorias >= filtros.minCalorias &&
      alimento.calorias <= filtros.maxCalorias &&
      alimento.grasas >= filtros.minGrasas &&
      alimento.grasas <= filtros.maxGrasas
    );
  }, [listadoAlimentos, busqueda, filtros]);

  /*** EFECTOS ***/
  useEffect(() => {
    if (sesionIniciada) getAlimentos();
  }, [sesionIniciada, getAlimentos]);

  useEffect(() => {
    if (errorAlimento.length) setErrorAlimento(cadenaVacia);
  }, [cambioDeRuta.pathname]);

  /*** CONTEXTO ***/
  const datosContexto = {
    getAlimentos,
    listadoAlimentos,
    guardarAlimentosEnDietaPersonalizada,
    filtros,
    busqueda,
    buscarAlimento,
    alimentosFiltrados,
    actualizarFiltro,
    seleccionarAlimento,
    alimentosSeleccionados,
    aumentarCantidad,
    disminuirCantidad,
    eliminarAlimento,
    listaAlimentosDieta,
    obtenerAlimentosDieta,
    loading,
    errorAlimento,
  };

  return (
    <contextoAlimentos.Provider value={datosContexto}>
      {children}
    </contextoAlimentos.Provider>
  );
};

export default AlimentosContexto;
export { contextoAlimentos };

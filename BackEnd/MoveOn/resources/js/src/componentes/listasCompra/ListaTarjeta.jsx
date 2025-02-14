import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { generarRecomendacion } from "../../bibliotecas/funcioteca.js";
import { cargarImagenes } from '../../bibliotecas/funcioteca.js'

import useDatosDeLista from '../../hooks/useDatosDeLista.jsx';
import "./ListaTarjeta.css";

import useContexto from '../../hooks/useContexto.jsx';

const ListaTarjeta = ({ lista }) => {
  const { eliminarListaDeCompra } = useContexto("listas");
  // Usamos el hook personalizado para obtener totales y el estado loading.
  const { totales, loading } = useDatosDeLista(lista.id_lista);
  // Estado para la frase de recomendación.
  const [recomendacion, setRecomendacion] = useState("");
  // Ruta de las imagenes que he importado.
  const img = cargarImagenes();

  useEffect(() => {
    if (totales) {
      setRecomendacion(generarRecomendacion(totales.totalPeso > 12));
    }
  }, [totales]);

  return (
    <section className='lista-tarjeta' id={lista.id_lista}
      onClick={(evento) => {
        if (evento.target.classList.contains("del")) {
          eliminarListaDeCompra(evento);
        }
      }}>
      <div className='lista-tarjeta-izq'>
        <section className='lista-tarjeta-nombre'>
          <h3>{lista.nombre_lista}</h3>
        </section>
        <section className='lista-tarjeta-resumen'>
          <div className="lista-tarjeta-contenido">
            <p>TOTAL DE PRODUCTOS</p>
            <p>{loading ? "Cargando..." : `${totales.totalProductos} Uds`}</p>
          </div>
          <div className="lista-tarjeta-contenido">
            <p>PRECIO DE LA LISTA</p>
            <p>{loading ? "Cargando..." : `${totales.totalPrecio} €`}</p>
          </div>
          <div className="lista-tarjeta-contenido">
            <p>PESO DE LA LISTA</p>
            <p>{loading ? "Cargando..." : `${totales.totalPeso} kg`}</p>
          </div>
        </section>
        <section className='lista-tarjeta-extra'>
          <div className="lista-tarjeta-contenido">
            <p>RECOMENDACIONES</p>
            <img src={loading ? null : (totales.totalPeso > 12 ? img.coche : img.huellas)} alt="Recomendaciones" />
          </div>
          <p>{loading ? "Cargando..." : recomendacion}</p>
        </section>
      </div>
      <div className="lista-tarjeta-der">
        <Link to={`/listas-compra/${lista.id_lista}/gestion`}>
          <img src={img.anyadir} alt='Añadir' title="Añadir productos a la lista" />
        </Link>
        <Link to={`/listas-compra/${lista.id_lista}`}>
          <img src={img.ver} alt='Ver' title="Ver contenido de la lista" />
        </Link>
        <img src={img.borrar} className='del' alt='Borrar' title="Borrar la lista actual" />
      </div>
    </section>
  );
};

export default ListaTarjeta;

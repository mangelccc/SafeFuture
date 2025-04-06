import React from 'react';
import { Link } from "react-router-dom";
import borrar from "../../../imagenes/borrar.png";
import ver from "../../../imagenes/ver.png";
import "./ListaTarjeta.css";


const DietasUsuario = ({dieta}) => {
    console.log(dieta);

    return (
      <section className='lista-tarjeta' /* id={} */
        onClick={(evento) => {
          if (evento.target.classList.contains("del")) {
            //eliminarListaDeCompra(evento);
          }
        }}>
        <div className='lista-tarjeta-izq'>
          <section className='lista-tarjeta-nombre'>
            <h3>{dieta.nombre}</h3>
          </section>
          <section className='lista-tarjeta-resumen'>
            <div className="lista-tarjeta-contenido">
              <p>Tu objetivo:</p>
              <p>{dieta.pivot.objetivo} {dieta.pivot.objetivo === "Ganar" ? "masa" : "peso"}</p>
            </div>
            <div className="lista-tarjeta-contenido">
              <p>Descripción:</p>
              <p>{dieta.descripcion}</p>
            </div>

          </section>
          
        </div>
        <div className="lista-tarjeta-der">

          <Link> {/* Ejemplo en listas (UseParams) -> /listas-compra/${lista.id_lista} */}
            <img src={ver} alt='Ver' title="Ver contenido de la lista" />
          </Link>
          <img src={borrar} className='del' alt='Borrar' title="Borrar la lista actual" />
        </div>
      </section>
    );
}

export default DietasUsuario;
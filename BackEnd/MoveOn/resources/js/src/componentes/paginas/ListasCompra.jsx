import React from 'react';
import { Link } from "react-router-dom";
import ListaTarjeta from '../listasCompra/ListaTarjeta.jsx';
import useContexto from '../../hooks/useContexto.jsx'
import "./ListasCompra.css"


const ListasCompra = () => {

  const { listasUsuario } = useContexto("listas");

  return (
    <>
    <section className='listas-compra-header'>
        <div>
        <h2>Tus listas de compra</h2>
        <p>Haz clic en los iconos laterales para añadir productos, ver sus detalles o eliminarlas.</p>
        </div>
        <div>
            <Link to="/listas-compra-crear">
                <button> Crear nueva lista </button>
            </Link>
        </div>

    </section>
    <section className='listas-compra-listas'>
    
        {listasUsuario.length && Array.isArray(listasUsuario) 
        ? listasUsuario.map((lista) => {
            return <ListaTarjeta key={lista.id_lista} lista={lista}/>
        })
        : <p>AÚN NO TIENES NINGUNA LISTA, CREA UNA EN EL BOTÓN CREAR NUEVA LISTA</p> }
        
    </section>
    </>
  )
}

export default ListasCompra;
import React from "react";
import { Link } from "react-router-dom";
import useContexto from '../../hooks/useContexto.jsx'
import "./Inicio.css";

const Inicio = () => {
  
  const { sesionIniciada } = useContexto("sesion");

  return (
    <div className="inicio-container">
      <header className="inicio-header">
        <h1>Bienvenido a Tu Plataforma de Listas</h1>
        <p>Gestiona tus productos y listas de compra con estilo y eficiencia.</p>
      </header>
      
      <section className="inicio-content">
        <div className="card">
          <h2>Listas de Compra</h2>
          <p>Visualiza, crea y administra tus listas de compra.</p>
          {/* Si no hay sesión iniciada, se redirige a /login */}
          <Link to={sesionIniciada ? "/listas-compra" : "/login"} className="btn">
            Ir a Listas de compra
          </Link>
        </div>
        <div className="card">
          <h2>Productos</h2>
          <p>Consulta y busca tus productos en el catálogo.</p>
          <Link to={sesionIniciada ? "/lista" : "/login"} className="btn">
            Ver Listado de productos
          </Link>
        </div>
        <div className="card">
          <h2>Administración</h2>
          <p>Crea, edita y elimina productos (Pórtate bien).</p>
          <Link to={sesionIniciada ? "/lista-admin" : "/login"} className="btn">
            Ver Listas
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Inicio;

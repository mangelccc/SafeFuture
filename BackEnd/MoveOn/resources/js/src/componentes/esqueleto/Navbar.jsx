import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import CerrarSesion from "../sesion/CerrarSesion.jsx";
import useContexto from '../../hooks/useContexto.jsx'

const Navbar = () => {
  // Para poder controlar las rutas en función de si el usuario está logueado o no.
  const { sesionIniciada } = useContexto("sesion");

  return (
    <>
      <nav className="navbar-menu">
        <div className="navbar-sesion">
          <Link className="navbar-boton" to="/">
            Inicio
          </Link>
          {sesionIniciada &&
            <>
              <Link className="navbar-boton " to="/lista">
                Listado
              </Link>
              <Link className="navbar-boton " to="/lista-admin">
                Administrar Listado
              </Link>
              <Link className="navbar-boton " to="/listas-compra">
                Listas de compra
              </Link>
            </>
          }
        </div>
        <div className="navbar-sesion">
          {sesionIniciada ?
            <CerrarSesion />
            :
            <Link className="navbar-boton " to="/login">
              Login
            </Link>
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;

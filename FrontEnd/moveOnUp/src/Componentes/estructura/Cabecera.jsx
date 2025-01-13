import React from "react";
import { Link } from "react-router-dom";
import "./Cabecera.css";
import logo from "../../Bibliotecas/svg/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Cabecera = () => {
  // Aquí podrías comprobar si hay sesión iniciada (lógica futura)
  const isAuthenticated = false; // Esto es un ejemplo

  return (
    <>
      <nav className='navegacion__menu'>
        <div className='navegacion__logo'>
          <img src={logo}/>
          <div className='titulo__logo'>
            <span>Safe</span>
            <span>Future</span>
          </div>
        </div>
        <div className='navegacion__links'>
          <Link className='navegacion__enlace' to='/'>
            Inicio
          </Link>
          <Link className='navegacion__enlace' to='/listasCompras'>
            ¿Qué somos?
          </Link>
          <Link className='navegacion__enlace' to='/'>
            Servicios
          </Link>
          <Link className='navegacion__enlace' to='/'>
            Foro
          </Link>
          <Link className='navegacion__enlace' to='/ayuda'>
            Contáctanos
          </Link>
        </div>
        <div className='navegacion__login'>
        {isAuthenticated && (
            <Link className='navegacion__enlace' to='/perfil'>
              Perfil
            </Link>
          )}
          <Link className='navegacion__cuenta' to='/login'>
            <FontAwesomeIcon className='icon__user' icon={faUser} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Cabecera;

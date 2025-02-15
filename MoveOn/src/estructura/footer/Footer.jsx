import React from 'react';
import "./Footer.css";
import redesSociales from "../../objetos/redesSociales.js"
import Redes from './Redes.jsx';


const Footer = () => {
    return (
        <footer id='main-footer' className='grid grid-cols-4 grid-rows-1 justify-items-center'>
            <div>
                <h3 className='text-gold'>Contacto</h3>
                <ul>
                    <a href='#'><li>Preguntas frecuentes</li></a>
                    <a href='#'><li>Contacto</li></a>
                    <a href='#'><li>Teléfono: 697 123 456</li></a>
                    <a href='#'><li>(Petrer) 03610</li></a>
                    <a href='#'><li>moveon@gmail.com</li></a>
                </ul>
            </div>
            <div>
                <h3>Información</h3>
                <ul>
                    <a href='#'><li>Acerca de nosotros</li></a>
                    <a href='#'><li>Política de Privacidad</li></a>
                    <a href='#'><li>Política de cookies</li></a>
                    <a href='#'><li>Aviso Legal</li></a>
                    <a href='#'><li>Puntos de Fidelidad</li></a>
                </ul>
            </div>
            <div>
                <h3>Redes sociales</h3>
                <ul>
                    {redesSociales.map((redSocial, index) => (
                        <Redes
                            key={index}
                            icono={redSocial.icono}
                            nombre={redSocial.nombre}
                        />
                    ))}
                </ul>
            </div>
            <div className='flex items-center'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1561.6618677139766!2d-0.7789243!3d38.4801712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63c52dcc953db9%3A0x157a37c112acbc6a!2sI.E.S.%20Poeta%20Paco%20Moll%C3%A0!5e0!3m2!1ses!2ses!4v1739624827713!5m2!1ses!2ses"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>


        </footer>
    )
}

export default Footer;
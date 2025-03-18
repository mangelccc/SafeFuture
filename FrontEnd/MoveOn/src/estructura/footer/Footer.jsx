import React from 'react';
import redesSociales from "../../objetos/redesSociales.js";
import Redes from './Redes.jsx';

const Footer = () => {
  return (
    <footer
      id="main-footer"
      className="grid grid-cols-4 justify-items-center p-6 border-t-2 bg-white3 dark:bg-black1 border-t-black dark:border-t-white w-full bottom-0 gap-5"
    >
      <div>
        <h3 className="text-purple dark:text-gold pb-2 font-bold">Contacto</h3>
        <ul className="list-none p-0">
          <a href="#" className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold">
            <li className="py-2 text-sm">Preguntas frecuentes</li>
          </a>
          <a href="#" className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold">
            <li className="py-2 text-sm">Contacto</li>
          </a>
          <a href="#" className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold">
            <li className="py-2 text-sm">Teléfono: 697 123 456</li>
          </a>
          <a href="#" className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold">
            <li className="py-2 text-sm">(Petrer) 03610</li>
          </a>
          <a href="#" className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold">
            <li className="py-2 text-sm">moveon@gmail.com</li>
          </a>
        </ul>
      </div>
      <div>
        <h3 className="text-purple dark:text-gold pb-2 font-bold">Información</h3>
        <ul className="list-none p-0">
          <a href="#" className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold">
            <li className="py-2 text-sm">Acerca de nosotros</li>
          </a>
          <a href="#" className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold">
            <li className="py-2 text-sm">Política de Privacidad</li>
          </a>
          <a href="#" className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold">
            <li className="py-2 text-sm">Política de cookies</li>
          </a>
          <a href="#" className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold">
            <li className="py-2 text-sm">Aviso Legal</li>
          </a>
          <a href="#" className="no-underline transition-colors duration-300 dark:text-white dark:hover:text-turq hover:underline hover:decoration-turq decoration-2 dark:hover:decoration-gold">
            <li className="py-2 text-sm">Puntos de Fidelidad</li>
          </a>
        </ul>
      </div>
      <div>
        <h3 className="text-purple dark:text-gold pb-2 font-bold">Redes sociales</h3>
        <ul className="list-none flex flex-col justify-center gap-2 pt-2">
          {redesSociales.map((redSocial, index) => (
            <Redes
              key={index}
              icono={redSocial.icono}
              nombre={redSocial.nombre}
            />
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center border-3 border-purple  dark:border-gold rounded-xl">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1561.6618677139766!2d-0.7789243!3d38.4801712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63c52dcc953db9%3A0x157a37c112acbc6a!2sI.E.S.%20Poeta%20Paco%20Moll%C3%A0!5e0!3m2!1ses!2ses!4v1739624827713!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='h-full rounded-xl'
        ></iframe> */}
      </div>
    </footer>
  );
};

export default Footer;

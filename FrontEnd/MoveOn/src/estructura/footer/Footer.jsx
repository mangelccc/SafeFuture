import React from 'react';

import ListaContacto from './listas/listaContacto.jsx';
import ListaInformacion from './listas/ListaInformacion.jsx';
import ListaRedes from './listas/ListaRedes.jsx';

const Footer = () => {
  return (
    <footer
      id="main-footer"
      className="grid sm:grid-cols-4 justify-items-center hsm:grid-cols-2 hsm:grid-rows-2 p-6 border-t-2 bg-white3 dark:bg-black1 border-t-black dark:border-t-white w-full bottom-0 sm:gap-5 hsm:gap-10"
    >

      <ListaContacto />
      <ListaInformacion />
      <ListaRedes />

      <div className="flex items-center justify-center border-3 border-purple  dark:border-gold rounded-xl overflow-hidden max-w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1561.6618677139766!2d-0.7789243!3d38.4801712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63c52dcc953db9%3A0x157a37c112acbc6a!2sI.E.S.%20Poeta%20Paco%20Moll%C3%A0!5e0!3m2!1ses!2ses!4v1739624827713!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='h-full rounded-xl'
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;

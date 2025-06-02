import React, { useState } from "react";
import card1 from "../../galeria/imagenes/Card1.webp";
import card2 from "../../galeria/imagenes/Card2.webp";
import FormularioContacto from "./FormularioContacto.jsx";

const Contactanos = () => {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="ml-4 dark:text-gold">Contacta con nosotros</h1>

      <div className="flex flex-col sm:flex-row gap-8">
        {/* Sección de tarjetas */}
        <div className="flex flex-col gap-8 flex-1">
          {/* Tarjeta 1 */}
          <div className="relative flex flex-col gap-6 p-6 rounded-[20px] min-h-[246px] bg-[#40d9ff80]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/30 z-[-1] rounded-[20px]" />
            <div className="absolute inset-0 w-full h-full z-[-2] overflow-hidden rounded-[20px]">
              <picture>
                <source media="(max-width: 992px)" srcSet={card1} />
                <img
                  className="w-full h-full object-cover"
                  src={card1}
                  alt="Imagen de asesoría"
                />
              </picture>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-base-white font-primary font-medium leading-[32px]">
                ¿Tienes dudas generales?
              </h2>
              <p className="font-primary text-base-white text-md font-normal leading-[26px]">
                Para más información sobre MoveOn, nuestros objetivos o cómo empezar a usar la plataforma, escríbenos un mensaje o consulta nuestra sección de ayuda.
              </p>
            </div>
            <div>
              <a
                href="mailto:moveon@gmail.com"
                className="justify-center w-full min-w-[220px] max-w-[420px] sm:w-auto btn btn-true-white group flex items-center gap-1.5 before:!hidden bg-whiteOp rounded-lg p-2"
              >
                Escríbenos a moveon@gmail.com
                <div className="cursor-pointer px-1 transform transition-transform group-hover:animate-slide-fade [&_svg_path]:stroke-primary-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7.05023 16.9493L16.2426 7.75691M8.46445 7.0498H15.9497C16.502 7.0498 16.9497 7.49752 16.9497 8.0498V15.5351" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="relative flex flex-col gap-6 p-6 rounded-[20px] min-h-[246px] bg-[#ffa32680]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/30 z-[-1] rounded-[20px]" />
            <div className="absolute inset-0 w-full h-full z-[-2] overflow-hidden rounded-[20px]">
              <picture>
                <source media="(max-width: 992px)" srcSet={card2} />
                <img
                  className="w-full h-full object-cover"
                  src={card2}
                  alt="Imagen de soporte"
                />
              </picture>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-base-white font-primary font-medium leading-[32px]">
                ¿Necesitas asistencia?
              </h2>
              <p className="font-primary text-base-white text-md font-normal leading-[26px]">
                Si ya formas parte de la comunidad MoveOn y necesitas soporte técnico o ayuda con tu cuenta, puedes llamarnos directamente:
              </p>
            </div>
            <span>
              <a
                href="tel:+34697123456"
                className="justify-center w-full min-w-[220px] max-w-[420px] sm:w-auto btn btn-true-white group flex items-center gap-1.5 before:!hidden bg-whiteOp rounded-lg p-2"
              >
                697 123 456
                <div className="cursor-pointer px-1 transform transition-transform group-hover:animate-slide-fade [&_svg_path]:stroke-primary-purple bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7.05023 16.9493L16.2426 7.75691M8.46445 7.0498H15.9497C16.502 7.0498 16.9497 7.49752 16.9497 8.0498V15.5351" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
              </a>
            </span>
          </div>
        </div>

        {/* Sección del formulario */}
        <div className="flex-1">
          <FormularioContacto />
        </div>
      </div>
    </section>
  );
};

export default Contactanos;
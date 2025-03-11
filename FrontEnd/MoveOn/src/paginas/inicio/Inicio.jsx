import React from "react";

const Inicio = () => {
  return (
    <>
      <div className="bg-purple dark:bg-purpleOp rounded-2xl p-12 grid grid-cols-2 gap-20 flex-grow">
        <article>
          <h1 className="m-0 text-gold">Cambio de Vida</h1>
          <h2 className="text-turq font-normal pl-0 pb-4">Introduccion</h2>

          <p className="text-white text-justify leading-normal mb-8">
            Safe Future es una innovadora plataforma diseñada para brindar
            soluciones prácticas a personas que desean transformar sus vidas, ya
            sea encontrando empleo en toda Europa, trasladándose a nuevas
            ubicaciones o adoptando hábitos saludables. Con un enfoque centrado
            en la reintegración social, recompensamos a los usuarios por sus
            logros a través de un sistema motivador de puntos. Además,
            proporcionamos recursos y apoyo para facilitar el cambio hacia un
            futuro más prometedor. Aquí puedes ver un video que explica nuestra
            misión y cómo funcionamos.
          </p>
          <button
            className="relative bg-black1 border-0 text-white rounded-xl text-2xl py-3 px-6 font-semibold transition ease-in-out duration-200 cursor-pointer hover:bg-gold hover:text-black1 hover:-translate-y-1.5 active:translate-y-1 active:bg-gold"
          >
            Descubre más
          </button>
        </article>
        <div>
          <iframe
            className="w-full h-full rounded-xl border border-gold"
            src="https://www.youtube.com/embed/cJZlSS0aKj8"
            title="Video de Safe Future"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Inicio;
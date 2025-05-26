import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { FaBrain, FaRobot, FaMicrochip, FaDumbbell, FaAppleAlt, FaHeartbeat, FaPlane, FaMap, FaGlobe } from "react-icons/fa";

const slides = [
  {
    icons: [
      <FaBrain key="brain" className="w-20 h-20 sm:w-36 sm:h-36 mx-4 sm:mx-12" />,
      <FaRobot key="robot" className="w-20 h-20 sm:w-36 sm:h-36 mx-4 sm:mx-12" />,
      <FaMicrochip key="chip" className="w-20 h-20 sm:w-36 sm:h-36 mx-4 sm:mx-12" />
    ],
    title: "Inteligencia artificial",
    description: `En Safe Future hemos integrado avanzados sistemas de inteligencia artificial que analizan tus datos personales, rutinas de ejercicio y hábitos de alimentación para ofrecerte recomendaciones altamente personalizadas. Nuestra IA adapta tus entrenamientos en tiempo real según tu rendimiento y estado físico, sugiere ajustes en tu dieta según tus objetivos y te asesora sobre las mejores ubicaciones para emigrar basándose en criterios como coste de vida, oportunidades laborales y calidad de vida. Todo ello mediante interfaces intuitivas y seguimiento constante que te acompañan en cada paso de tu proceso de cambio.`,
  },
  {
    icons: [
      <FaDumbbell key="dumbbell" className="w-20 h-20 sm:w-36 sm:h-36 mx-4 sm:mx-12" />,
      <FaAppleAlt key="apple" className="w-20 h-20 sm:w-36 sm:h-36 mx-4 sm:mx-12" />,
      <FaHeartbeat key="heartbeat" className="w-20 h-20 sm:w-36 sm:h-36 mx-4 sm:mx-12" />
    ],
    title: "Cambio físico",
    description: `Nuestra sección de cambio físico combina rutinas de entrenamiento diseñadas por expertos con planes nutricionales detallados adaptados a tus requerimientos metabólicos. Incluye vídeos demostrativos de ejercicios, calculadoras de macros, recordatorios para mantener la hidratación y módulos de seguimiento semanal que registran tu evolución en fuerza, resistencia y composición corporal. Además, ofrecemos recursos y soportes para dejar de fumar de forma gradual, integrando técnicas de mindfulness y coaching de hábitos para asegurar cambios sostenibles en tu estilo de vida.`,
  },
  {
    icons: [
      <FaPlane key="plane" className="w-20 h-20 sm:w-36 sm:h-36 mx-4 sm:mx-12" />,
      <FaMap key="map" className="w-20 h-20 sm:w-36 sm:h-36 mx-4 sm:mx-12" />,
      <FaGlobe key="globe" className="w-20 h-20 sm:w-36 sm:h-36 mx-4 sm:mx-12" />
    ],
    title: "Ayuda para emigrar",
    description: `Te ofrecemos una plataforma de búsqueda y comparación de destinos internacionales, con mapas interactivos, filtros por zona, coste de vida y oportunidades profesionales. Puedes explorar galerías multimedia con testimonios de personas que ya han emigrado, acceder a guías locales actualizadas y recibir alertas de ofertas de vuelos y alojamientos. Nuestro sistema de recomendaciones personalizadas te sugiere rutas y trámites administrativos necesarios, facilitando así tu proceso de traslado y adaptación en un nuevo país.`,
  }
];


const Inicio = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="bg-purple dark:bg-purpleOp sm:rounded-2xl">
      <div className="p-12 hsm:mt-[-1.5rem] hsm:mb-[-0.5rem] grid sm:grid-cols-2 hsm:grid-cols-1 sm:gap-20 hsm:gap-6">
        <article className="hsm:order-last">
          <h1 className="m-0 text-gold">Cambio de Vida</h1>
          <h2 className="text-turq font-normal pl-0 pb-4">Introducción</h2>
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
          <Link to="/descubre">
            <button className="relative bg-black1 border-0 text-white rounded-xl text-2xl py-3 px-6 font-semibold transition ease-in-out duration-200 cursor-pointer hover:bg-gold hover:text-black1 hover:-translate-y-1.5 active:translate-y-1 active:bg-gold">
              Descubre más
            </button>
          </Link>
        </article>
        <div>
          <video
            className="max-w-full rounded-xl border border-gold"
            controls
            autoPlay
            loop
            muted
          >
            <source src="/videos/move-on.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      </div>

      <h2 className="text-gold p-6 text-center font-bold">Desarrolladores</h2>
      <div className="w-full mt-12 px-4 flex hsm:flex-col sm:flex-row justify-around gap-8 text-center mb-12">
        <div className="flex-1">
          <img
            src="/imagenes/mangel.jpg"
            alt="Desarrollador 1"
            className="w-[250px] h-[250px] rounded-full object-cover mx-auto mb-4"
          />
          <h3 className="text-gold text-xl font-semibold mb-6">Miguel Ángel Grimal Lopez</h3>
          <p className="text-white sm:px-40">Encargado de la creación  de la api y subida a aws, desarrollo de los agentes de inteligencia artificial, mapa mundi con ubicaciones destacas y de la funcionalidad de hacer rutinas gimnasio. </p>
        </div>
        <div className="flex-1">
          <img
            src="/imagenes/miguel.png"
            alt="Desarrollador 2"
            className="w-[250px] h-[250px] rounded-full object-cover mx-auto mb-4"
          />
          <h3 className="text-gold text-xl font-semibold mb-6">Miguel Hernández Monllor</h3>
          <p className="text-white sm:px-40">Encargado del diseño web, del diseño responsive y el cambio de tema, el desarrollo de rutinas personalizadas, el calendario, contador para no fumar y de la creación del perfil del usuario y uso de los roles.</p>
        </div>
      </div>

      <h2 className="text-gold p-6 text-center font-bold">Contenidos de la página</h2>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full p-6 flex justify-start">
                <div className="bg-black1 bg-opacity-50 p-6 rounded-2xl w-full">
                  <h4 className="font-semibold mb-2 text-gold text-[24px]">{slide.title}</h4>
                  <p className="text-[20px] text-white">{slide.description}</p>
                  <div className="flex justify-center mb-4 mt-8 text-white">
                    {slide.icons.map((icon) => icon)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black1 bg-opacity-50 p-2 rounded-full"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black1 bg-opacity-50 p-2 rounded-full"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Inicio;

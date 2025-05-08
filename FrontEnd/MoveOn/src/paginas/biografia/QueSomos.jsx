import React from "react";
import { Link } from "react-router-dom";

const SobreNosotros = () => {
  return (
    <div className="w-full bg-purple dark:bg-purpleOp p-8 sm:p-12 mb-4 rounded-2xl space-y-16 opacity-0 translate-y-6 animate-fadeInUp text-left">

      <header className="space-y-4">
        <h1 className="text-gold text-4xl font-bold w-full">Sobre Nosotros</h1>
        <p className="text-white text-lg leading-relaxed">
          En <span className="font-semibold">MoveOn</span>, parte de la familia <span className="font-semibold">SafeFuture</span>, creamos un ecosistema de apoyo para todas aquellas personas dispuestas a cambiar su vida. Nuestra misión es acompañarte sin coste en cada paso hacia una versión más saludable, activa y plena.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-gold text-3xl font-bold">Nuestra Visión y Valores</h2>
        <p className="text-white leading-relaxed">
          Creemos en el poder de la transformación personal. Salir de la zona de confort fomenta el crecimiento y nos abre puertas a oportunidades insospechadas. Por ello, promovemos valores como la responsabilidad, la perseverancia, la solidaridad y el bienestar global. Cada herramienta que ofrecemos nace del compromiso con tu salud física, mental y emocional.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-gold text-3xl font-bold">Lo Que Encontrarás en MoveOn</h2>
        <ul className="list-disc list-inside text-white leading-relaxed space-y-3">
          <li><strong>Rutinas de Ejercicio:</strong> Diseñadas por expertos y adaptables a todos los niveles. Vídeos con explicaciones paso a paso y seguimiento de progreso.</li>
          <li><strong>Dietas Personalizadas:</strong> Planes de alimentación basados en tus objetivos, con calculadora de macronutrientes y recetas saludables.</li>
          <li><strong>Dejar de Fumar:</strong> Contador de día sin tabaco, estadísticas de dinero ahorrado y consejos motivacionales para cada etapa del proceso.</li>
          <li><strong>Búsqueda de Empleo Internacional:</strong> Guías prácticas para preparar tu currículum, consejos para entrevistas y adaptación a culturas laborales extranjeras.</li>
          <li><strong>Calendario Integral:</strong> Agenda tus ejercicios, comidas y metas diarias con recordatorios y notas motivacionales.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-gold text-3xl font-bold">Nuestra Historia</h2>
        <p className="text-white leading-relaxed">
          MoveOn surge en el instituto Paco Molla, de la mano de dos jóvenes emprendedores: <span className="font-semibold">Miguel Ángel Grima López</span> y <span className="font-semibold">Miguel Hernández Monllor</span>. Con la visión de conectar pasión por el deporte, nutrición y crecimiento profesional, fundaron esta iniciativa que hoy apoya a miles de usuarios. Desde un simple proyecto escolar hasta una plataforma integral, nuestro crecimiento refleja el entusiasmo y la dedicación de quienes creen que un pequeño cambio puede marcar la diferencia.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-gold text-3xl font-bold">Únete y Transforma Tu Vida</h2>
        <p className="text-white leading-relaxed">
          No importa tu punto de partida. En MoveOn encontrarás las herramientas y el apoyo necesarios para dar el primer paso hacia tus metas. Nuestra comunidad comparte testimonios, consejos y motivación diaria para que cada día sientas el impulso de seguir avanzando.
        </p>
        <div className="mt-4">
          <Link
            to="/usuario"
            className="inline-block bg-black1 text-white text-xl font-bold px-6 py-3 rounded-xl transition ease-in-out duration-200 hover:bg-gold hover:text-black1 hover:-translate-y-1.5 active:translate-y-1 active:bg-gold"
          >
            Regístrate Gratis
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SobreNosotros;

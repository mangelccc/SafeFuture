import React from 'react';

const PoliticaCookies = () => {
  return (
    <section className="mx-auto hsm:w-full sm:w-2/3 px-4 hsm:py-4 sm:py-8 text-black dark:text-white">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-purple dark:text-gold">Política de Cookies</h1>

      <p className="mb-4">
        Esta Política de Cookies explica qué son las cookies, cómo las usamos y cómo puedes gestionarlas cuando visitas nuestra plataforma MoveOn.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">1. ¿Qué son las cookies?</h2>
      <p className="mb-4">
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a reconocerte y a recordar tus preferencias para mejorar tu experiencia de usuario.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">2. ¿Qué tipos de cookies usamos?</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Cookies esenciales:</strong> necesarias para el funcionamiento básico de la plataforma.</li>
        <li><strong>Cookies de análisis:</strong> nos permiten entender cómo interactúas con la plataforma y mejorarla.</li>
        <li><strong>Cookies de personalización:</strong> recuerdan tus preferencias y configuraciones.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">3. ¿Cómo puedes gestionarlas?</h2>
      <p className="mb-4">
        Puedes configurar tu navegador para rechazar todas las cookies. Ten en cuenta que al desactivarlas, algunas funciones de la plataforma podrían no estar disponibles o no funcionar correctamente.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">4. Cambios en la política</h2>
      <p className="mb-4">
        Podemos actualizar esta política ocasionalmente para reflejar cambios en nuestras prácticas. Te informaremos de cualquier modificación relevante.
      </p>

      <p className="mt-6 italic text-sm text-black2 dark:text-white2">
        Última actualización: 14 de mayo de 2025
      </p>
    </section>
  );
};

export default PoliticaCookies;

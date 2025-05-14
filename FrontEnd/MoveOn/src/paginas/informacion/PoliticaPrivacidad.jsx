import React from 'react';

const PoliticaPrivacidad = () => {
  return (
    <section className="mx-auto hsm:w-full sm:w-2/3 px-4 hsm:py-4 sm:py-8 text-black dark:text-white">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-purple dark:text-gold">Política de Privacidad</h1>

      <p className="mb-4">
        En MoveOn valoramos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal cuando utilizas nuestra plataforma.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">1. Información que recopilamos</h2>
      <p className="mb-4">
        Recopilamos información como tu nombre, correo electrónico, edad, sexo, hábitos, ubicación e historial de uso para personalizar tu experiencia y brindarte el mejor servicio posible.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">2. Cómo usamos tu información</h2>
      <p className="mb-4">
        Utilizamos tus datos para:
        <ul className="list-disc list-inside mt-2">
          <li>Proporcionarte acceso a nuestros servicios y funcionalidades.</li>
          <li>Ofrecerte recomendaciones personalizadas.</li>
          <li>Gestionar tu cuenta y preferencias.</li>
          <li>Mejorar nuestros servicios y funcionalidades.</li>
          
        </ul>
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">3. Seguridad</h2>
      <p className="mb-4">
        Implementamos medidas técnicas y organizativas para proteger tu información frente a accesos no autorizados, alteraciones o pérdidas.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">4. Tus derechos</h2>
      <p className="mb-4">
        Puedes acceder, modificar o eliminar tus datos en cualquier momento desde tu perfil. También puedes solicitar la eliminación total de tu cuenta.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">5. Cambios a esta política</h2>
      <p className="mb-4">
        Podemos actualizar esta política ocasionalmente. Te notificaremos si se realizan cambios importantes.
      </p>

      <p className="mt-6 italic text-sm text-black2 dark:text-white2">
        Última actualización: 14 de mayo de 2025
      </p>
    </section>
  );
};

export default PoliticaPrivacidad;

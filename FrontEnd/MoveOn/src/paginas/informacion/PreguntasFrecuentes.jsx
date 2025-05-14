import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: '¿Cómo puedo registrarme?',
      answer: 'Para registrarte, haz clic en el icono del usuario y después dale al botón de "Registrate" en el panel de la derecha e introduce tus datos.',
      link: '/usuario',
      textLink: 'Registrate aquí',
    },
    {
      question: '¿Es gratuito el uso de la plataforma?',
      answer: 'Sí, el acceso básico es gratuito. Ofreceremos planes premium con funciones avanzadas más tarde.',
    },
    {
      question: '¿Cómo puedo contactar con soporte?',
      answer: `Puedes escribirnos a moveon@gmail.com o llamar al teléfono +34 697 631 285.`,
      link: 'mailto:moveon@gmail.com',
      textLink: 'moveon@gmail.com',
    },
    {
      question: '¿Cómo puedo recuperar mi contraseña?',
      answer: 'Puedes restablecer tu contraseña desde la pantalla de inicio de sesión haciendo clic en “¿Olvidaste tu contraseña?”. Te enviaremos un enlace al correo con instrucciones.',
      link: '/recuperar-passwd',
      textLink: 'Recupérala aquí',
    },
    {
      question: '¿Puedo cambiar mi correo electrónico una vez registrado?',
      answer: 'Sí, puedes cambiar tu correo electrónico desde tu perfil en la sección correo electrónico dándole al botón de editar.',
      link: '/usuario-informacion',
      textLink: 'Ir a mi perfil',
    },
    {
      question: '¿Cómo elimino mi cuenta?',
      answer: 'Puedes solicitar la eliminación de tu cuenta desde la configuración del perfil. Recuerda que esta acción es irreversible.',
      link: '/usuario-informacion',
      textLink: 'Eliminar cuenta',
    },
    {
      question: '¿Puedo usar la aplicación desde el móvil?',
      answer: 'Sí, la plataforma está completamente adaptada para dispositivos móviles. Puedes acceder desde cualquier navegador móvil.',
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto hsm:w-full sm:w-2/3 px-2 hsm:py-4 sm:py-8">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 p-4 rounded-2xl shadow-md bg-white dark:bg-black1 border border-purple animate-fadeInUp hsm:p-2 sm:p-4"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="flex items-center justify-between w-full text-left focus:outline-none"
          >
            <span className="text-base sm:text-lg font-medium text-black dark:text-white hover:text-gold">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 text-gold ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="mt-2 text-sm sm:text-base text-black2 dark:text-white2">
              {faq.answer}
              {faq.link && (
                <div className='mt-2'>
                  <Link to={faq.link} className="text-purple dark:text-gold hover:underline" rel="noopener noreferrer">
                    {faq.textLink}
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default PreguntasFrecuentes;

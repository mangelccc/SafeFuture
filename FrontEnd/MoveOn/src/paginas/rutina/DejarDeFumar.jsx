import React from 'react';

export default function DejarDeFumar() {
    const benefits = [
        { title: '20 minutos', description: 'Tu ritmo cardíaco vuelve a la normalidad.' },
        { title: '24 horas', description: 'Mejora la función pulmonar y la presión arterial.' },
        { title: '1 año', description: 'El riesgo de enfermedad cardíaca se reduce a la mitad.' },
        { title: '5 años', description: 'El riesgo de accidente cerebrovascular es similar al de un no fumador.' },
    ];

    const tips = [
        'Establece una fecha para dejarlo y cúmplela.',
        'Busca apoyo: familiares, amigos o grupos de ayuda.',
        'Identifica y evita los desencadenantes.',
        'Utiliza técnicas de distracción (ejercicio, hobbies).',
        'Considera reemplazos de nicotina o asesoramiento profesional.',
    ];

    return (
        <div className="max-w-5xl mx-auto py-12 px-6 space-y-12 bg-white dark:bg-black1 text-black dark:text-white">
            {/* Hero Section */}
            <section className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-purple dark:text-gold">Dejar de Fumar: Tu Guía de Cambio de Vida</h1>
                <p className="text-lg mb-6 text-black2 dark:text-white2">
                    Descubre los beneficios inmediatos, estrategias efectivas y recursos para liberarte del tabaco.
                </p>
                <button className="mt-6 px-6 py-3 text-lg rounded-2xl bg-purple dark:bg-turq text-white hover:scale-102 transform transition">
                    Comienza Ahora
                </button>
            </section>

            {/* Benefits Timeline */}
            <section>
                <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">Beneficios a Corto y Largo Plazo</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {benefits.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl shadow-lg p-6 bg-white2 dark:bg-black2 hover:scale-102 transform transition"
                        >
                            <h3 className="font-bold text-xl text-turq dark:text-purple">{item.title}</h3>
                            <p className="mt-2 text-black1 dark:text-white3">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tips Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">Estrategias y Consejos</h2>
                <ul className="list-disc list-inside space-y-3 text-black1 dark:text-white3">
                    {tips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                    ))}
                </ul>
            </section>

            {/* Resources */}
            <section>
                <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">Recursos y Apoyo</h2>
                <div className="rounded-2xl shadow-md p-6 bg-white2 dark:bg-black2">
                    <p className="text-black1 dark:text-white2">
                        <strong className="text-purple dark:text-gold">Línea de ayuda 24/7:</strong> 800-xxxx-xxx<br />
                        <strong className="text-purple dark:text-gold">Web:</strong>{' '}
                        <a href="https://www.dejardefumar.org" className="underline text-turq dark:text-turq">
                            dejardefumar.org
                        </a>
                    </p>
                </div>
            </section>

            {/* Call To Action */}
            <section className="text-center py-8">
                <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">¿Listo para dejarlo?</h2>
                <button className="px-8 py-3 text-lg rounded-2xl bg-gold dark:bg-purple text-black hover:scale-102 transform transition">
                    ¡Empieza tu plan hoy!
                </button>
            </section>
        </div>
    );
}

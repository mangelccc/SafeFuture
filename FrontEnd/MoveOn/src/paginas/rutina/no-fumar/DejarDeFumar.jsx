import React from 'react';
import { Link, Element } from 'react-scroll';
import { useNoFumar } from "../../../contextos/NoFumarContexto.jsx";
import { benefits, tips, calcularDuracion } from "../../../bibliotecas/biblioteca.js"
import BotonDeRetroceso from '../../../menus/BotonDeRetroceso.jsx';

const DejarDeFumar = () => {
    const { records, activeRecord, contador, comenzarIntento, loading, terminarIntento } = useNoFumar();

    return (
        <div className="max-w-5xl mx-auto py-12 px-6 space-y-12 bg-white dark:bg-black1 text-black dark:text-white rounded-xl">
            {/* Hero Section */}
            <section className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-purple dark:text-gold">Dejar de Fumar: Tu Guía de Cambio de Vida</h1>
                <p className="text-lg mb-6 text-black2 dark:text-white2">
                    Descubre los beneficios inmediatos, estrategias efectivas y recursos para liberarte del tabaco.
                </p>
                <Link to="listo" smooth={true} duration={500}>
                    <button className="mt-6 px-6 py-3 text-lg rounded-2xl bg-purple dark:bg-turq text-white hover:scale-102 transform transition">
                        Comienza Ahora
                    </button>
                </Link>
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
                        <strong className="text-purple dark:text-gold">Línea de ayuda 24/7:</strong> +34 123 456 789<br />
                        <strong className="text-purple dark:text-gold">Web:</strong>{' '}
                        <a href="https://www.dejardefumar.org" className="underline text-turq dark:text-turq">
                            dejardefumar.org
                        </a>
                    </p>
                </div>
            </section>

            {/* Aquí va el contador */}
            <Element name="listo">
                <section className="text-center py-8">
                    <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                        Tiempo desde tu último intento
                    </h2>
                    {activeRecord ? (
                        <div className="text-3xl font-mono">
                            {contador.days}d {contador.hours}h {contador.minutes}m {contador.seconds}s
                        </div>
                    ) : (
                        <p className="text-lg">
                            No tienes ningún intento activo. Pulsa en “Iniciar intento” para fijar tu fecha.
                        </p>
                    )}
                    <button
                        onClick={activeRecord ? terminarIntento : comenzarIntento}
                        className="mt-4 px-6 py-3 text-lg rounded-2xl bg-gold dark:bg-purple dark:text-white text-black hover:scale-102 transform transition"
                    >
                        {activeRecord
                            ? "Terminar Intento"
                            : loading
                                ? "Cargando..."
                                : "Iniciar Intento"}
                    </button>
                </section>
            </Element>

            {/* Historial */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                    Historial de Intentos
                </h2>
                <ul className="space-y-4">
                    {records.map((record) => (
                        <li key={record.id} className="rounded-2xl shadow-lg p-4 bg-white2 dark:bg-black2">
                            <div>
                                <strong>Fecha inicio:</strong> {new Date(record.quit_date).toLocaleDateString()}
                            </div>
                            <div>
                                <strong>Estado:</strong> {record.status}
                            </div>
                            {record.status !== "activo" &&
                                <div>
                                    <strong>Duración:</strong> {calcularDuracion(record.created_at, record.updated_at)}
                                </div>
                            }
                        </li>
                    ))}
                </ul>
            </section>
            <div className="flex justify-center mt-4">
                <BotonDeRetroceso textoBoton="Volver a tus rutinas" />
            </div>
        </div>
    );
}
export default DejarDeFumar;
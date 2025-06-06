// DescubreMas.jsx
import React from "react";
import { Link } from "react-router-dom";
import Ejercicios from "../../galeria/imagenes/ejercicios-rutinas.png"
import Dietas from "../../galeria/imagenes/dietas-alimentos.png"
import Calendario from "../../galeria/imagenes/calendario.png"
import NoFumar from "../../galeria/imagenes/no-fumar.png"

const DescubreMas = () => {
    return (
        <div className="bg-black3 dark:bg-purpleOp p-8 sm:p-12 mb-4 sm:rounded-2xl space-y-16 opacity-0 translate-y-6 animate-fadeInUp border-2 border-purple dark:border-0">

            <section className="flex hsm:flex-col hsm:items-center sm:gap-20 hsm:gap-10">
                <div>
                    <h2 className="text-gold text-3xl font-bold mb-4">Ejercicios y Rutinas</h2>
                    <p className="text-white text-justify leading-relaxed">
                        Descubre una amplia variedad de ejercicios organizados por niveles y objetivos. Podrás crear tus propias rutinas o seguir rutinas recomendadas, adaptadas a tus preferencias y capacidades físicas. Cada ejercicio incluye explicaciones, imágenes y vídeos para ayudarte a ejecutarlo correctamente.
                    </p>
                </div>
                <img src={Ejercicios} alt="Ejercicios y Rutinas" className="w-40 h-40 rounded-lg" />
            </section>

            <section className="flex hsm:flex-col hsm:items-center sm:gap-20 hsm:gap-10">
                <img src={Dietas} alt="Dietas Personalizadas" className="w-40 h-40 rounded-lg hsm:order-2" />
                <div>
                    <h2 className="text-gold text-3xl font-bold mb-4">Dietas Personalizadas</h2>
                    <p className="text-white text-justify leading-relaxed">
                        Diseña tu propia dieta según tus metas: ganar masa muscular, perder peso o mantener tu forma física.
                        Selecciona entre una gran variedad de alimentos clasificados por categoría, y ajústalos a los macronutrientes diarios recomendados por la aplicación. Podrás guardar tus dietas y recibir sugerencias de mejora en base a tus progresos. ¡Come bien, siéntete mejor!
                    </p>
                </div>
            </section>

            <section className="flex hsm:flex-col hsm:items-center sm:gap-20 hsm:gap-10">
                <div>
                    <h2 className="text-gold text-3xl font-bold mb-4">Calendario de Actividades</h2>
                    <p className="text-white text-justify leading-relaxed">
                        Organiza tu día a día con nuestro calendario personalizable. Puedes anotar rutinas de ejercicio, recordatorios para tus comidas, tareas diarias o incluso citas médicas o mensajes motivacionales.
                    </p>
                </div>
                <img src={Calendario} alt="Calendario" className="w-40 h-40 rounded-lg" />
            </section>

            <section className="flex hsm:flex-col hsm:items-center sm:gap-20 hsm:gap-10">
                <img src={NoFumar} alt="Dejar de Fumar" className="w-40 h-40 rounded-lg hsm:order-2" />
                <div>
                    <h2 className="text-gold text-3xl font-bold mb-4">Dejar de Fumar</h2>
                    <p className="text-white text-justify leading-relaxed mb-4">
                        Sabemos que dejar de fumar es un reto, por eso te ofrecemos un espacio exclusivo donde encontrarás
                        motivación, beneficios a corto y largo plazo. Activa el contador para ver cuántos días llevas sin fumar y cuántos cigarrillos has evitado. Si en algún momento fallas, puedes reiniciar el contador y seguir intentándolo. Aquí, cada pequeño paso cuenta.
                    </p>
                </div>
            </section>

            <div className="text-center">
                <Link
                    to="/usuario"
                    className="inline-block bg-black1 text-white text-xl font-bold px-6 py-3 rounded-xl transition ease-in-out duration-200 hover:bg-gold hover:text-black1 hover:-translate-y-1.5 active:translate-y-1 active:bg-gold"
                >
                    ¡Crea tu cuenta ahora!
                </Link>
            </div>
        </div>
    );
};

export default DescubreMas;

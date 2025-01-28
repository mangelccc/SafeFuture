import React from "react";
import "./Inicio.css";

const Inicio = () => {
  return (
    <>
    <div id="contenedor-inicio">
        <article id="inicio-contenido">
          <h1>Cambio de Vida</h1>
          <h2>Introduccion</h2>
          <p>Safe Future es una innovadora plataforma diseñada para brindar soluciones prácticas a personas que desean transformar sus vidas, ya sea encontrando empleo en toda Europa, trasladándose a nuevas ubicaciones o adoptando hábitos saludables. Con un enfoque centrado en la reintegración social, recompensamos a los usuarios por sus logros a través de un sistema motivador de puntos. Además, proporcionamos recursos y apoyo para facilitar el cambio hacia un futuro más prometedor. Aquí puedes ver un video que explica nuestra misión y cómo funcionamos.</p>
          <button>Descubre más</button>
        </article>
        <div id="inicio-video"> 
        <iframe
            src="https://www.youtube.com/embed/cJZlSS0aKj8"
            title="Video de Safe Future" 
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Inicio;

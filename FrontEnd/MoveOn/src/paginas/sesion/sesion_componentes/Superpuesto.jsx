import React, { useContext } from "react";
import { contextoAuth } from "../../../contextos/AuthContexto.jsx";


const Superpuesto = () => {

    const {
        muestraRegistroClick,
    } = useContext(contextoAuth);

    return (
        <>
            <div className="contenedor-superpuesto">
                <div className="superpuesto">
                    <div className="panel-superpuesto superpuesto-izquierda">
                        <h2>¡Hola, Amigo!</h2>
                        <p>Ingresa tus datos y comienza tu viaje con nosotros</p>
                        <button className="escondido" onClick={() => muestraRegistroClick(false)} id="signIn">
                            Iniciar Sesión
                        </button>
                    </div>
                    <div className="panel-superpuesto superpuesto-derecha">
                        <h2>¡Bienvenido de Nuevo!</h2>
                        <p>Para mantenerte conectado con nosotros, por favor inicia sesión</p>
                        <button className="escondido" onClick={() => muestraRegistroClick(true)} id="signUp">
                            Registrar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Superpuesto;

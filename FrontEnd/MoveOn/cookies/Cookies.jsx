import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
    const [mostrarCookies, setMostrarCookies] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMostrarCookies(true);
        }, 500); // Esperamos 500ms antes de mostrar el banner
    }, []);

    return (
        <div>
            <CookieConsent
                containerClasses="cookie-banner"
                location="bottom"
                buttonText="Aceptar"
                declineButtonText="Rechazar"
                cookieName="user-consent"
                style={{
                    background: "#6520eeDD",
                    color: "#fff",
                    fontSize: "14px",
                    textAlign: "center",
                    transition: "opacity 1s ease-in-out",
                    opacity: mostrarCookies ? 1 : 0, // Aparece el banner cuando el timeout establece mostrarCookies a true
                }}
                buttonStyle={{
                    backgroundColor: "#2F2F2F",
                    color: "#FFBA49",
                    fontSize: "13px",
                    borderRadius: "5px",
                    padding: "8px 20px",
                }}
                expires={150} 

                enableDeclineButton
                onDecline={() => {
                    /* Podemos personalizar algo para cuando se rechazen las cookies */
                }}
                declineButtonStyle={{
                    backgroundColor: "darkred", // 
                    color: "#FFBA49",
                    fontSize: "13px",
                    borderRadius: "5px",
                    padding: "8px 20px",
                    marginLeft: "10px", // Separación del botón "Aceptar"
                }}
            >
                Este sitio web usa cookies para mejorar tu experiencia.{" "}

                <span style={{ fontSize: "10px", marginLeft: "10px" }}>Puedes optar por no aceptar las cookies.</span>
            </CookieConsent>
        </div>
    );
};

export default CookieBanner;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PasoFinal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Rutina");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="pasoA-container">
      <h2 className="pasoA-title">Paso B</h2>
      <div className="pasoA-fieldContainer">
        <p>Redirigiendo a Rutina...</p>
      </div>
    </div>
  );
};

export default PasoFinal;

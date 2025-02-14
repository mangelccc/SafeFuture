import React from "react";
import "./Content.css";

const Content = ({ children }) => {
  return (
    <>
    {/* Contenedor padre que contiene a todos los demás dentro, con un ligero fondo en verde. */}
      <main id='content'>
        {children}
      </main>
    </>
  );
};

export default Content;

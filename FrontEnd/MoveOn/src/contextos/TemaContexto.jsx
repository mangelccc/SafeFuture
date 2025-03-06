// temaContexto.js
import { createContext, useContext, useEffect, useState } from "react";

const temaContexto = createContext();

export const TemaContexto = ({ children }) => {
  const [tema, setTema] = useState(localStorage.getItem("tema") || "light"); // Modo oscuro predeterminado

  useEffect(() => {
    if (tema === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("tema", tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((temaAnterior) => (temaAnterior === "light" ? "dark" : "light"));
  };

  return (
    <temaContexto.Provider value={{ tema, alternarTema }}>
      {children}
    </temaContexto.Provider>
  );
};

export default temaContexto;
export const useTema = () => useContext(temaContexto);

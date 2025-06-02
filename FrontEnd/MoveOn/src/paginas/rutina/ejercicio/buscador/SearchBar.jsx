import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import useAppContext from "../../../../hooks/useAppContext.jsx";

export const SearchBar = ({ setResults }) => {
  const { ejerciciosContex } = useAppContext();
  const { ejercicios, readEjercicios } = ejerciciosContex;
  const [input, setInput] = useState("");

  useEffect(() => {
    readEjercicios();
  }, []);

  const handleChange = (value) => {
    setInput(value);
    const filtered = ejercicios.filter((ej) =>
      ej.nombre?.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);

  };

  return (
    <div className="w-full h-10 rounded-lg px-4 shadow-md bg-white dark:bg-black3 flex items-center">
      <FaSearch className="text-purple dark:text-gold" />
      <input
        type="text"
        placeholder="Busca un ejercicio..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className="bg-transparent border-none h-full w-full p-2 text-xl dark:text-white focus:outline-none"
      />
    </div>
  );
};

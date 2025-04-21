import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import useAppContext from "../../../../hooks/useAppContext.jsx";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const { ejerciciosContex } = useAppContext();
  const { ejercicios,readEjercicios } = ejerciciosContex;
  const [input, setInput] = useState("");
  useEffect(() => {
    readEjercicios();
  }, []);

  // 2. Filtrar localmente cuando cambie el input
  const handleChange = (value) => {
    setInput(value);

    const filtered = ejercicios.filter(ej =>
      ej.nombre?.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
    console.log(filtered);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
};

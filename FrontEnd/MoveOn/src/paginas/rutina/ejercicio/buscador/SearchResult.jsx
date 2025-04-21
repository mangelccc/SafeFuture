import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => console.log(`Selecionado: ${result.id_ejercicio}!`)}
    >
      {result.nombre}
    </div>
  );
};

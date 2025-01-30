import React from "react";
import "./Alimento.css";

const AlimentoAdm = ({alimento}) => {

  return (
    <>
      <div className="alimento">
        <img src={alimento.imagen_url} />
        <p><strong>Nombre:</strong> {alimento.nombre}</p>
        <p><strong>Kg:</strong> {alimento.peso_kg}</p>
        <p><strong>Precio :</strong> {alimento.precio_euros}</p>
        <p><strong>Descripcion:</strong> {alimento.descripcion}</p>
        <p><strong>Codigo:</strong> {alimento.codigo_barras}</p>
        <p><strong>Categorias:</strong> {alimento.categoria}</p>
        <p><strong>H:</strong> {alimento.hidratos}</p>
        <p><strong>G:</strong> {alimento.grasas}</p>
        <p><strong>P:</strong> {alimento.proteinas}</p>
        <p><strong>C:</strong> {alimento.calorias}</p>
        <img src={alimento.imagen_url}></img>
      </div>
    </>
  );
};

export default AlimentoAdm;

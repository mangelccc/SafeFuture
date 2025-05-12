import React from 'react';
import redesSociales from "../../../objetos/redesSociales.js";
import Redes from './../Redes.jsx';

const ListaRedes = () => {
  return (
    <div>
        <h3 className="text-purple dark:text-gold pb-2 font-bold">Redes sociales</h3>
        <ul className="list-none flex flex-col justify-center gap-2 pt-2">
          {redesSociales.map((redSocial, index) => (
            <Redes
              key={index}
              icono={redSocial.icono}
              nombre={redSocial.nombre}
              link={redSocial.link}
            />
          ))}
        </ul>
      </div>
  )
}

export default ListaRedes;
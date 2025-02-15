import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Redes.css";


const Redes = ({icono, nombre}) => {
  return (
    <li className="item-redes">
        <FontAwesomeIcon className="redes-icono" icon={icono} />
                
    </li>
  )
}

export default Redes
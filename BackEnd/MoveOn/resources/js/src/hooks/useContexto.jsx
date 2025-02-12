import { useContext } from 'react';
import { contextoProductos } from '../contextos/ProveedorProductos.jsx';
import { contextoListas } from '../contextos/ProveedorListas.jsx';
import { contextoSesion } from '../contextos/ProveedorSesion.jsx';

const useContexto = (tipo) => {
  switch (tipo) {
    case 'productos':
      return useContext(contextoProductos);
    case 'listas':
      return useContext(contextoListas);
    case 'sesion':
      return useContext(contextoSesion);
    default:
      throw new Error("Tipo de contexto no definido");
  }
};

export default useContexto;



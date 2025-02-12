import React from 'react';
import "./AdminLista.css";
import { Outlet } from "react-router-dom";
import SubMenuLista from '../esqueleto/SubMenuLista.jsx';

const AdminLista = () => {

  return (
    <div className='lista-admin'>
      <SubMenuLista/>
      {/* Outlet para el contenido de las subrutas. */}
      <Outlet />
    </div>
  )
}

export default AdminLista;
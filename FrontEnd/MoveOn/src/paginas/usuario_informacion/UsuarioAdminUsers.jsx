import React from 'react';

const UsuarioAdminUsers = ({ datos }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="font-medium">{datos.nombre}</span>
      <span className="text-sm text-gray-500">{datos.rol}</span>
    </div>
  );
};

export default UsuarioAdminUsers;

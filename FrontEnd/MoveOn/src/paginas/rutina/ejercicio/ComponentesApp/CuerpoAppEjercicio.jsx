import React from "react";
import { Outlet } from "react-router-dom";


const CuerpoAppEjercicio = () => {
  return (
      <div>
        <Outlet />
      </div>
  );
};

export default CuerpoAppEjercicio;

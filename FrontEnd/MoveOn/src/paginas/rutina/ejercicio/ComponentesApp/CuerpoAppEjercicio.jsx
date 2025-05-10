import React from "react";
import { Outlet } from "react-router-dom";


const CuerpoAppEjercicio = () => {
  return (
    <div className="flex-1 bg-white dark:bg-black3 p-6 overflow-auto">
      <Outlet />
    </div>
  );
};


export default CuerpoAppEjercicio;

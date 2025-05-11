import React from "react";
import { Outlet } from "react-router-dom";


const CuerpoAppEjercicio = () => {
  return (
    <div className="flex-1 bg-white dark:bg-black1 overflow-auto flex flex-col">
      <Outlet />
    </div>
  );
};


export default CuerpoAppEjercicio;

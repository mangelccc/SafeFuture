import React from "react";
import { Outlet } from "react-router-dom";


const CuerpoAppEjercicio = () => {
  return (
    <div className="border-l dark:border-white p-4 border-black" >
        <Outlet />
      </div>
  );
};

export default CuerpoAppEjercicio;

import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/Inicio.jsx";
import Perfil from "../paginas/Perfil.jsx";
import Contact from "../paginas/Contact/Contact.jsx";
import Error from "../paginas/Error.jsx";
import About from "../paginas/About/About.jsx";
import Services from "../paginas/Services/Services.jsx";
import Planning from "../paginas/Planning/Planning.jsx";
import Forum from "../paginas/Forum/Forum.jsx";
import Login from "../paginas/Login/Login.jsx";
import RecuperarPass from "../sesion/RecuperarPass.jsx";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        

        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/planning' element={<Planning/>}/>
        <Route path='/forum' element={<Forum/>}/>
        
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-passwd' element={<RecuperarPass />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default Rutas;

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./UsuarioDatos.css";

const UsuarioDatos = ({usuario}) => {

    return (
        <>
            <article className="sm:w-2/3 mx-8 mb-8 border border-gold text-white">
                <div className="bg-black3 py-4 px-8 font-bold text-xl flex justify-between">
                    <p>Nombre de usuario</p>
                    <FontAwesomeIcon className="icon-pencil hover:text-turq transition duration-300 ease-in-out cursor-pointer hover:scale-110" icon={faPenToSquare} />
                </div>
                <div className="bg-black2 py-4 px-8 grid grid-cols-3">
                    <span className="col-start-1">Usuario

                    </span>
                    <span className="col-start-2 ">
                        {usuario && usuario.nombre
                            ? usuario.nombre
                            : "No hay usuario activo"}
                    </span>
                </div>
            </article>

            <article className="sm:w-2/3 mx-8 mb-8 border border-gold text-white">
                <div className="bg-black3 py-4 px-8 font-bold text-xl flex justify-between">
                    <p>Correo electrónico</p>
                    <FontAwesomeIcon className="icon-pencil hover:text-turq transition duration-300 ease-in-out cursor-pointer hover:scale-110" icon={faPenToSquare} />
                </div>
                <div className="bg-black2 py-4 px-8 grid grid-cols-3">
                    <span className="col-start-1">Correo

                    </span>
                    <span className="col-start-2">
                        {usuario && usuario.correo
                            ? usuario.correo
                            : "Correo no encontrado"}
                    </span>
                </div>
            </article>

            <article className="sm:w-2/3 mx-8 mb-8 border border-gold text-white">
                <div className="bg-black3 py-4 px-8 font-bold text-xl flex justify-between">
                    <p>Contraseña</p>
                    <FontAwesomeIcon className="icon-pencil hover:text-turq transition duration-300 ease-in-out cursor-pointer hover:scale-110" icon={faPenToSquare} />
                </div>
                <div className="bg-black2 py-4 px-8 grid grid-cols-3">
                    <span className="col-start-1">Contraseña</span>
                    <span className="col-start-2">
                        {usuario && usuario.contrasena
                            ? "* * * * * * * * * * *"
                            : "Contraseña no encontrada"}
                    </span>
                </div>
            </article>

            <article className="sm:w-2/3 mx-8 mb-8 border border-gold text-white">
                <div className="bg-black3 py-4 px-8 font-bold text-xl flex justify-between">
                    <p>Edad</p>
                    <FontAwesomeIcon className="icon-pencil hover:text-turq transition duration-300 ease-in-out cursor-pointer hover:scale-110" icon={faPenToSquare} />
                </div>
                <div className="bg-black2 py-4 px-8 grid grid-cols-3">
                    <span className="col-start-1">Edad</span>
                    <span className="col-start-2">
                        {usuario && usuario.edad
                            ? usuario.edad
                            : "Edad no encontrada"}
                    </span>
                </div>
            </article>

            <article className="sm:w-2/3 mx-8 mb-8 border border-gold text-white">
                <div className="bg-black3 py-4 px-8 font-bold text-xl flex justify-between">
                    <p>Sexo</p>
                    <FontAwesomeIcon className="icon-pencil hover:text-turq transition duration-300 ease-in-out cursor-pointer hover:scale-110" icon={faPenToSquare} />
                </div>
                <div className="bg-black2 py-4 px-8 grid grid-cols-3">
                    <span className="col-start-1">Sexo</span>
                    <span className="col-start-2">
                        {usuario && usuario.sexo
                            ? usuario.sexo
                            : "Sexo no encontrado"}
                    </span>
                </div>
            </article>
        </>
    )
}

export default UsuarioDatos
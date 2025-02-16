import React from 'react'

const UsuarioDatos = () => {

  return (
    <article className="w-1/2 ml-8 border border-gold text-wsmk">
        <div className="bg-black3 py-4 px-8 font-bold text-xl">
          <p>Correo electrónico</p>
        </div>
        <div className="bg-black2 py-4 px-8">
          <p>Correo electrónico
            <span className="pl-14">
            {usuario && usuario.correo
              ? usuario.correo
              : "Datos sin definir"}
              </span>
          </p>
        </div>
      </article>
  )
}

export default UsuarioDatos
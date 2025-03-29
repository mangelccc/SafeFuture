import React from 'react'

const ErroresDietas = ({ children }) => {
    return (
        <>
            <div className='errores w-full p-2.5 mt-5 bg-[#2c2c2c] border-2 border-[#259463] rounded-lg text-sm text-red-600 outline-none transition-all duration-300 placeholder:text-[#7a7a7a] focus:border-[#1a6e48] focus:shadow-md'>
                {Array.isArray(children)
                    ? children.map((valor, indice) => {
                        return <p key={indice} className='p-1'>{valor}</p>;
                    })
                    : <p className=''> {children} </p>
                }
            </div>
        </>
    );
}

export default ErroresDietas
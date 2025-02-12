import React  from 'react'
import useContexto from '../../hooks/useContexto.jsx'
import Errores from '../Errores.jsx';
import './RecuperarPass.css';

const RecuperarPass = () => {

    const { actualizarDato, restablecerContrasena, errorUsuario } = useContexto("sesion");

    return (
        <div className='recuperarContrasenya'>
            <h2>Recuperar contraseña</h2>
            <p>Introduzca su correo electrónico para recuperar su contraseña.</p>
            
            <label htmlFor='email'>Correo electrónico</label>
            <input
                type='email'
                name='email'
                id='loginemail'
                placeholder='Su email.'
                onChange={(e) => {
                    actualizarDato(e);
                }}
            />
            
            <button
                className="botonRecuperar"
                onClick={(e) => {
                    restablecerContrasena();
                }}
            >
                Recuperar contraseña
            </button>
            
            <Errores>{errorUsuario}</Errores>
        </div>
    )
}

export default RecuperarPass;
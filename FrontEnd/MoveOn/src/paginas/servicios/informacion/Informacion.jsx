import React from 'react';
import BotonDeRetroceso from '../../../menus/BotonDeRetroceso';

const Informacion = () => {
  return (
    <>  
    <div className="w-full h-screen p-4">
      <h2 className="font-bold mb-4 dark:text-gold hsm:text-center">Información completa para emigrar a otro país</h2>
      <iframe
        src="/docs/miarchivo.pdf"
        className="w-full h-full"
        title="Documento PDF"
      ></iframe>
    </div>
    <div className="flex justify-center mt-20">
      <BotonDeRetroceso textoBoton="Volver a los servicios"/>
    </div>
    </>
  );
};

export default Informacion;

import React from 'react';

const Informacion = () => {
  return (
    <div className="w-full h-screen p-4">
      <iframe
        src="/docs/miarchivo.pdf"
        className="w-full h-full"
        title="Documento PDF"
      ></iframe>
    </div>
  );
};

export default Informacion;

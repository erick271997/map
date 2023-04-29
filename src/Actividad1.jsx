import React from "react";

function Actividad1({ reyes }) {
    

 


const urlIm='https://www.html6.es/img/rey_'

  const resultado = reyes.map((e) => (
    <div key={e.nombre} className='rey'><span className="rojo">
      {e.nombre.toUpperCase()}</span> ha comido
      {e.reinado * e.vacasComidas * 365} Vacas en su {e.reinado}
      años de reinado
      <img src={urlIm+e.nombre.toLowerCase()+".png"} alt="rey"/>

      
    </div>
  ));
  return (
  <>{resultado}


     </>
  );
}

export default Actividad1;

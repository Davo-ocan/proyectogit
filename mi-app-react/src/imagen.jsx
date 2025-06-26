import { useState } from 'react';
import imagen1 from './assets/react.svg';
import imagen2 from './assets/modelo.png'; // cámbialo por el nombre real

function Imagen() {
  const [mostrarPrimera, setMostrarPrimera] = useState(true);

  return (
    <div>
      <img
        src={mostrarPrimera ? imagen1 : imagen2}
        alt="Imagen dinámica"
        width="200"
      />
      <br />
      <button onClick={() => setMostrarPrimera(!mostrarPrimera)}>
        Cambiar Imagen
      </button>
    </div>
  );
}

export default Imagen;

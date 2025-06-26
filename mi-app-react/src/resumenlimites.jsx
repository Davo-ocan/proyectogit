import './ResumenLimites.css';

const ResumenLimites = () => (
  <div className="resumen-container">
    <h1 className="resumen-title">Resumen de Límites</h1>
    <p className="resumen-text">
      En cálculo, un <strong>límite</strong> describe el valor al que se aproxima una función
      a medida que la variable independiente se acerca a un valor específico.
    </p>
    <p className="resumen-formula">
      <strong>Fórmula básica:</strong><br />
      lim<sub>x→a</sub> f(x) = L
    </p>
  </div>
);

export default ResumenLimites;


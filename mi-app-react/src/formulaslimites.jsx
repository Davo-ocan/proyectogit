import './FormulasLimites.css';

function FormulasLimites() {
  return (
    <div className="formulas-container">
      <div className="formula-card">
        <h2>Trigonométricos</h2>
        <p>lim(x→0) sin(x)/x = 1</p>
        <p>lim(x→0) (1 - cos(x))/x = 0</p>
      </div>

      <div className="formula-card">
        <h2>Algebraicos</h2>
        <p>lim(x→a) (x² - a²)/(x - a) = 2a</p>
        <p>lim(x→a) (√x - √a)/(x - a)</p>
      </div>

      <div className="formula-card">
        <h2>Cambio de Variable</h2>
        <p>Si t = x - a, entonces:</p>
        <p>lim(x→a) f(x) = lim(t→0) f(t + a)</p>
      </div>

      <div className="formula-card">
        <h2>Al Infinito</h2>
        <p>lim(x→∞) 1/x = 0</p>
        <p>lim(x→∞) (3x² + 2)/(x² - 5) = 3</p>
      </div>

      <div className="formula-card">
        <h2>Indeterminaciones</h2>
        <p>0/0, ∞/∞, ∞ - ∞, 0·∞, etc.</p>
        <p>Se resuelven con factorización, conjugadas o cambio de variable</p>
      </div>
    </div>
  );
}

export default FormulasLimites;

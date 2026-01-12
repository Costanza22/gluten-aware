import { useState } from "react";
import "./App.css";
import { checkFood } from "./services/api";

function App() {
  const [food, setFood] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheck() {
    if (!food) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await checkFood(food);
      setResult(data);
    } catch (err) {
      setError("Erro ao consultar alimento");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h2>Verificador de Glúten</h2>

      <input
        type="text"
        placeholder="Digite o nome do alimento"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      <button onClick={handleCheck}>
        Verificar
      </button>

      {loading && <p>Consultando...</p>}

      {result && (
        <div
          className={`result ${
            result.status === "SEM_GLUTEN" ? "safe" : "warning"
          }`}
        >
          <p><strong>Alimento:</strong> {result.food}</p>
          <p>
            <strong>Resultado:</strong>{" "}
            {result.status === "SEM_GLUTEN"
              ? "Sem glúten"
              : "Contém glúten"}
          </p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>
  );
}

export default App;

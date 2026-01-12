const API_URL = "http://localhost:3001";

export async function checkFood(foodName) {
  const response = await fetch(
    `${API_URL}/api/foods/check?name=${encodeURIComponent(foodName)}`
  );

  if (!response.ok) {
    throw new Error("Erro ao consultar alimento");
  }

  return response.json();
}

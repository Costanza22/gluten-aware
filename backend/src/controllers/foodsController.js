const pool = require('../db');

exports.checkFood = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Nome do alimento é obrigatório" });
  }
  const query = `
    SELECT 
      f.name AS food,
      BOOL_OR(i.contains_gluten) AS contains_gluten
    FROM foods f
    JOIN food_ingredients fi ON f.id = fi.food_id
    JOIN ingredients i ON i.id = fi.ingredient_id
    WHERE LOWER(f.name) = LOWER($1)
    GROUP BY f.name
  `;

  const { rows } = await pool.query(query, [name]);

  if (rows.length === 0) {
    return res.json({
      food: name,
      status: "DESCONHECIDO"
    });
  }

  const hasGluten = rows[0].contains_gluten;

  return res.json({
    food: rows[0].food,
    status: hasGluten ? "CONTEM_GLUTEN" : "SEM_GLUTEN"
  });
};

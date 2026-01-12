const express = require('express');
const cors = require('cors');

const foodRoutes = require('./routes/foods');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/foods', foodRoutes);

app.listen(3001, () => {
  console.log('API rodando em http://localhost:3001');
});

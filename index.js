require('dotenv').config();
const express = require('express');
const { getAll } = require('./models/products');

const app = express();

app.get('/products', getAll);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

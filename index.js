require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.use('/products', require('./routes/products'));
app.use('/sales', require('./routes/sales'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

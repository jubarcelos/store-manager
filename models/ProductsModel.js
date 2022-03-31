const connection = require('./connect_mysql');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

// const getById = async () => {
//   const productId = await connection.execute('SELECT * FROM products');
//   return productId;
// };

module.exports = {
  getAll,
  // getById,
};
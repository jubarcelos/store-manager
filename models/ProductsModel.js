const connection = require('./connect_mysql');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getById = async (id) => {
  const [product] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product[0];
};

const getByName = async (name) => {
  const [product] = await connection.execute('SELECT * FROM products WHERE name = ?', [name]);
  if (product.length === 0 || !product) return false;
  return product[0];
};

const create = async (product) => {
  const [result] = await connection.execute('INSERT INTO products (name, quantity) VALUES (?, ?)',
    [product.name, product.quantity]);

  return result.insertId;
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
};

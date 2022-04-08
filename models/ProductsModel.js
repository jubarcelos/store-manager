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
  // if (product.length === 0 || !product) return false;
  return product[0];
};

const create = async (product) => {
  const [result] = await connection.execute('INSERT INTO products (name, quantity) VALUES (?, ?)',
    [product.name, product.quantity]);

  return result.insertId;
};

const update = async ({ name, quantity }, id) => {
  await connection.execute('UPDATE products SET name = ?, quantity = ? WHERE id = ?',
    [name, quantity, id]);
  return { id, name, quantity };
};

const remove = async (id) => {
  await connection.execute('DELETE FROM products WHERE id = ?',
  [id]);
return {};
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove,
};

const connection = require('./connect_mysql');

const getAll = async (req, res) => {
  const [customers] = await connection.execute('SELECT * FROM products');
  return res.status(200).json(customers);
};

module.exports = { getAll };
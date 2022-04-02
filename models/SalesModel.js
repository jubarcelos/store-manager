const connection = require('./connect_mysql');

const getAll = async () => {
  const [sales] = await connection.execute('SELECT * FROM sales');
  return sales;
};

const getById = async (id) => {
  const [sale] = await connection.execute('SELECT * FROM sales WHERE id = ?', [id]);
  return sale[0];
};

module.exports = {
  getAll,
  getById,
};
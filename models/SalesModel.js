const connection = require('./connect_mysql');

const getAll = async () => {
  const [sales] = await connection.execute(
    `SELECT sp.sale_id AS saleId, sp.product_id AS productId, sp.quantity, s.date
     FROM StoreManager.sales_products AS sp
     JOIN StoreManager.sales AS s ON sp.sale_id = s.id;`,
  );
  return sales;
};

const getById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT s.date , sp.product_id AS productId, sp.quantity
     FROM StoreManager.sales_products AS sp
     JOIN StoreManager.sales AS s ON sp.sale_id = s.id
     WHERE s.id = ?;`,
    [id],
  );
  return sale;
};

module.exports = {
  getAll,
  getById,
};

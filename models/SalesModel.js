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

const createSaleId = async () => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales () VALUES()');
  return insertId;
};

const create = async (sales) => {
  const saleId = await createSaleId();
  const promise = sales.map(({ productId, quantity }) => {
    const insert = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
    return connection.execute(insert, [saleId, productId, quantity]);
  });
  await Promise.all(promise);
  return { id: saleId, itemsSold: sales };
};

const update = async (sales, saleId) => {
  const promise = sales.map(({ productId, quantity }) => {
    const updateSale = `UPDATE sales_products SET quantity = ?
    WHERE sale_id = ? AND product_id = ?;`;
    return connection.execute(updateSale, [quantity, saleId, productId]);
  });
  await Promise.all(promise);
  return { saleId, itemUpdated: sales };
};

module.exports = {
  getAll,
  getById,
  createSaleId,
  create,
  update,
};

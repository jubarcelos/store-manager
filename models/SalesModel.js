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
  const [saleId] = await connection.execute('INSERT INTO sales () VALUES()');
  return saleId.insertId;
};

// const insertQuery = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
// await connection.execute(insert, [saleId, productId, quantity]);

const create = async (sales) => {
  const saleId = await createSaleId();
  const promise = sales.map(({ productId, quantity }) => {
    const insert = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
    return connection.execute(insert, [saleId, productId, quantity]);
  });
  await Promise.all(promise);
  return { id: saleId, itemsSold: sales };
};

// const create = async (sale) => {
//   const [{ productId, quantity }] = sale;
//   const saleId = await createSaleId();

//   const [insertId] = await connection
//     .execute('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
//     [saleId, productId, quantity]);

//   return [{
//     id: insertId,
//     itemsSold: sale,
//   }];
// };

module.exports = {
  getAll,
  getById,
  create,
  // update,
};

// const update = async (saleId, productId, quantity) => {
//   const [sale] = await connection.execute(
//     `UPDATE sales_products
//      SET quantity = ?
//      WHERE sale_id = ? AND product_id = ?;`,
//     [quantity], [saleId, productId],
//   );
//   return sale;
// };

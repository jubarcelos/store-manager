const ProductsModel = require('../models/ProductsModel');
// const fs = require('fs').promises;

const getAll = async () => {
  const products = await ProductsModel.getAll();

  return products;
};

// const getById = async (id) => {
//   try {
//     const productId = await ProductsModel.getById(id);
//     return productId;
//   } catch (error) {
//     console.log(error);
//     return { error: 500, message: 'Erro no Servidor' };
//   }
// };

module.exports = {
  getAll,
  // getById,
};

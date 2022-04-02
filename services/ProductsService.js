const ProductsModel = require('../models/ProductsModel');
const { errorMessage } = require('../schemas/ProductErrorsResponse');

const getAll = async () => {
  const products = await ProductsModel.getAll();
  return products;
};

const getById = async (id) => {
  try {
    const productId = await ProductsModel.getById(id);
    return productId;
  } catch (error) {
    console.log(error);
    return errorMessage.noGet;
  }
};

const create = async (product) => {
  try {
    const { name } = product;
    const productExistence = await ProductsModel.getByName(name);
    if (productExistence) return errorMessage.alreadyExists.error;

    const productCreated = await ProductsModel.create(product);
    return productCreated;
  } catch (error) {
    console.log(error);
    return errorMessage.noGet;
  }
};

module.exports = {
  getAll,
  getById,
  create,
};

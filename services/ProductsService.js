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

    const insertId = await ProductsModel.create(product);
    const productCreated = await ProductsModel.getById(insertId);
    return productCreated;
  } catch (error) {
    console.log(error);
    return errorMessage.noGet;
  }
};

const update = async (product, id) => {
  try {
  const productExistence = await ProductsModel.getById(id);
  if (productExistence === undefined) return errorMessage.productNotFound.error;
  const updated = await ProductsModel.update(product, id);
  return updated;
  } catch (error) {
    console.log(error);
    return errorMessage.noGet;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};

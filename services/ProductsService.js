const ProductsModel = require('../models/ProductsModel');
const ErrorResponse = require('../schemas/ProductErrorsResponse');
// const fs = require('fs').promises;

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
    return ErrorResponse.noGet;
  }
};

const create = async (product) => {
  try {
    const { name } = product;
    const productExistence = await ProductsModel.getByName(name);
    if (productExistence) return ErrorResponse.BAD_REQUEST;

    const productCreated = await ProductsModel.create(product);
    return productCreated;
  } catch (error) {
    console.log(error);
    return ErrorResponse.noGet;
  }
};

module.exports = {
  getAll,
  getById,
  create,
};

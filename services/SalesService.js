const SalesModel = require('../models/SalesModel');
const { errorMessage } = require('../schemas/SaleErrorsResponse');

const getAll = async () => {
  const sales = await SalesModel.getAll();
  return sales;
};

const getById = async (id) => {
  try {
    const saleId = await SalesModel.getById(id);
    return saleId;
  } catch (error) {
    console.log(error);
    return errorMessage.noGet;
  }
};

const create = async (sale) => {
  try {
    const { name } = sale;
    const productExistence = await SalesModel.getByName(name);
    if (productExistence) return errorMessage.alreadyExists.error;

    const saleCreated = await SalesModel.create(sale);
    return saleCreated;
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

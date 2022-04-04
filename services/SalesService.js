const SalesModel = require('../models/SalesModel');
const { errorMessage } = require('../schemas/SaleErrosResponse');

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

const create = async (sales) => {
  try {
    const saleCreated = await SalesModel.create(sales);
    return saleCreated;
  } catch (error) {
    console.log(error);
    return errorMessage.noGet;
  }
};

const update = async (sales, saleId) => {
  try {
    const saleUpdated = await SalesModel.update(sales, saleId);
    return saleUpdated;
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

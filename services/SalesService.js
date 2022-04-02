const SalesModel = require('../models/SalesModel');

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
    return { error: 500, message: 'Erro no Servidor' };
  }
};

module.exports = {
  getAll,
  getById,
};

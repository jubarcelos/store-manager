const SalesModel = require('../models/SalesModel');
// const SalesSchema = require('../schemas/SaleSchema');
// const SaleErrorsResponse = require('../schemas/SaleErrosResponse');

// const { validation, blank } = SalesSchema;

const getAll = async () => {
  const sales = await SalesModel.getAll();
  // if (blank(sales)) return SaleErrorsResponse.errorMessage.noSaleFound;
  return sales;
};

const getById = async (id) => {
  try {
    // validation(id);
    const saleId = await SalesModel.getById(id);
    // if (SalesSchema.blank(saleId)) return SaleErrorsResponse.errorMessage.saleNotFound;
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

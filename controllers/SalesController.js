const SalesService = require('../services/SalesService');
// const HTTPCodes = require('../schemas/HTTPCodes');
// const SaleSchema = require('../schemas/SaleSchema');
// const SaleErrorsResponse = require('../errors/SaleErrorsResponse');

// const { validation, blank } = SaleSchema;

const getAll = async (req, res) => {
  try {
    const sales = await SalesService.getAll();
    // if (blank(sales)) {
    //   return res.status(HTTPCodes.NOT_FOUND)
    //   .json(SaleErrorsResponse.errorMessage.noProductFound).end();
    // }
    // return res.status(HTTPCodes.OK).json(sales).end();
    return res.status(200).json(sales).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor' });
    // return res.status(HTTPCodes.LOCAL_ERROR).json(SaleErrorsResponse.errorMessage.noGet).end();
  }
};

const getById = async (req, res) => {
  try {
    // validation(req.params.id);
    const saleId = await SalesService.getById(req.params.id);
    // if (blank(sale)) {
    //   return res.status(HTTPCodes.NOT_FOUND)
    //     .json(SaleErrorsResponse.errorMessage.productNotFound).end();
    // }
    // return res.status(HTTPCodes.OK).json(saleId).end();
    return res.status(200).json(saleId).end();
  } catch (error) {
    console.log(error);
    // return res.status(HTTPCodes.LOCAL_ERROR).json(SaleErrorsResponse.errorMessage.noGet).end();
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

module.exports = {
  getAll,
  getById,
};

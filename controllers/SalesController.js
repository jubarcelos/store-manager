const SalesService = require('../services/SalesService');
const HTTPCodes = require('../schemas/HTTPCodes');
const SaleSchema = require('../schemas/SaleSchema');
const SaleErrorsResponse = require('../errors/SaleErrorsResponse');

const { validation, blank } = SaleSchema;

const getAll = async (req, res) => {
  try {
    const sales = await SalesService.getAll();
    if (blank(sales)) {
      return res.status(HTTPCodes.NOT_FOUND)
      .json(SaleErrorsResponse.errorMessage.noProductFound).end();
    }
    return res.status(HTTPCodes.OK).json(sales).end();
  } catch (error) {
    console.log(error);
    return res.status(HTTPCodes.LOCAL_ERROR).json(SaleErrorsResponse.errorMessage.noGet).end();
  }
};

const getById = async (req, res) => {
  try {
    validation(req.params.id);
    const sale = await SalesService.getById(req.params.id);
    if (blank(sale)) {
      return res.status(HTTPCodes.NOT_FOUND)
        .json(SaleErrorsResponse.errorMessage.productNotFound).end();
    }
    return res.status(HTTPCodes.OK).json(sale).end();
  } catch (error) {
    console.log(error);
    return res.status(HTTPCodes.LOCAL_ERROR).json(SaleErrorsResponse.errorMessage.noGet).end();
  }
};

module.exports = {
  getAll,
  getById,
};

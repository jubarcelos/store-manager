const SalesService = require('../services/SalesService');
const HTTPCodes = require('../schemas/HTTPCodes');
const { message } = require('../schemas/SaleErrosResponse');

const getAll = async (req, res) => {
  try {
    const sales = await SalesService.getAll();
    return res.status(HTTPCodes.OK).json(sales).end();
  } catch (error) {
    console.log(error);
    return res.status(HTTPCodes.LOCAL_ERROR).json({ message: message.noGet });
  }
};

const getById = async (req, res) => {
  try {
    const salesId = await SalesService.getById(req.params.id);
    if (salesId === undefined || salesId.length === 0) {
      return res.status(HTTPCodes.NOT_FOUND).json({ message: message.saleNotFound }).end;
    }
    return res.status(HTTPCodes.OK).json(salesId).end();
  } catch (error) {
    console.log(error);
    return res.status(HTTPCodes.LOCAL_ERROR).json({ message: message.noGet });
  }
};

const create = async (req, res) => {
  try {
    const sales = await SalesService.create(req.body);
    return res.status(HTTPCodes.CREATED).json(sales).end();
  } catch (error) {
    console.log(error);
    return res.status(HTTPCodes.LOCAL_ERROR).json({ message: message.noGet });
  }
};

const update = async (req, res) => {
  try {
    const salesId = await SalesService.getById(req.params.id);
    if (salesId === undefined || salesId.length === 0) {
      return res.status(HTTPCodes.NOT_FOUND).json({ message: message.saleNotFound });
    }
      const sales = await SalesService.update(req.body, req.params.id);
      return res.status(HTTPCodes.OK).json(sales);
  } catch (error) {
    console.log(error);
    return res.status(HTTPCodes.LOCAL_ERROR).json({ message: message.noGet });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};

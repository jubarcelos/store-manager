const ProductsService = require('../services/ProductsService');
const HTTPCodes = require('../schemas/HTTPCodes');
const { message } = require('../schemas/ProductErrorsResponse');

const getAll = async (req, res) => {
  try {
    const products = await ProductsService.getAll();
    return res.status(HTTPCodes.OK).json(products).end();
  } catch (error) {
    console.log(error);
    return res.status(HTTPCodes.LOCAL_ERROR).json({ message: message.noGet });
  }
};

const getById = async (req, res) => {
  try {
    const productId = await ProductsService.getById(req.params.id);
  if (productId === undefined) {
    return res.status(HTTPCodes.NOT_FOUND).json({ message: message.productNotFound }).end();
  }
  return res.status(HTTPCodes.OK).json(productId).end();
  } catch (error) {
    console.log(error);
    return res.status(HTTPCodes.LOCAL_ERROR).json({ message: message.noGet });
  }
};

const create = async (req, res) => {
  try {
    const product = await ProductsService.create(req.body);
    return res.status(HTTPCodes.CREATED).json(product).end();
  } catch (error) {
    console.log(error);
    return res.status(HTTPCodes.LOCAL_ERROR).json({ message: message.noGet });
  }
};

module.exports = {
  getAll,
  getById,
  create,
};

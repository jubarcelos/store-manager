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
    if (!product.name) {
      return res.status(HTTPCodes.ALREADY_EXIST)
      .json({ message: message.alreadyExists }).end();
    }
      return res.status(HTTPCodes.CREATED).json(product).end();
  } catch (error) {
    console.log(error);
    return res.status(HTTPCodes.LOCAL_ERROR).json({ message: message.noGet });
  }
};

// const update = async (req, res) => {
//   try {
//     const product = await ProductsService.update(req.params.id, req.body);
//     if (product === undefined) {
//       return res.status(HTTPCodes.NOT_FOUND)
//       .json({ message: message.productNotFound }).end();
//     }
//     return res.status(HTTPCodes.OK).json(product).end();
//   } catch (error) {
//     console.log(error);
//     return res.status(HTTPCodes.LOCAL_ERROR).json({ message: message.noGet });
//   }
// };

const update = async (req, res) => {
  try {
    const product = await ProductsService.update(req.body, req.params.id);
    const toUpdate = await ProductsService.getById(req.params.id);
    if (!toUpdate) {
      return res.status(HTTPCodes.NOT_FOUND).json({ message: message.productNotFound }).end();
    }
    return res.status(HTTPCodes.OK).json(product).end();
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

const ProductsService = require('../services/ProductsService');
// const HTTPCodes = require('../schemas/HTTPCodes');
// const ProductSchema = require('../schemas/ProductSchema');
// const { errorMessage } = require('../schemas/ProductErrorsResponse');

// const { validation, blank } = ProductSchema;

const getAll = async (req, res) => {
  try {
    const products = await ProductsService.getAll();
    return res.status(200).json(products).end();

    // if (blank(products)) {
    //   return res.status(HTTPCodes.NOT_FOUND).json(errorMessage.noProductFound).end();
    // }
    // return res.status(HTTPCodes.OK).json(products).end();
  } catch (error) {
    console.log(error);
    // return res.status(HTTPCodes.LOCAL_ERROR).json(errorMessage.noGet).end();
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

const getById = async (req, res) => {
  try {
    const productId = await ProductsService.getById(req.params.id);
  if (productId.message) return res.status(404).json(productId);
  return res.status(200).json(productId).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

module.exports = {
  getAll,
  getById,
};
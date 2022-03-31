const ProductsService = require('../services/ProductsService');

const getAll = async (req, res) => {
  try {
    const products = await ProductsService.getAll();
    return res.status(200).json(products).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

const getById = async (req, res) => {
  try {
    const productId = await ProductsService.getById(req.params.id);
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

const ProductsModel = require('../models/ProductsModel');
// const ProductSchema = require('../schemas/ProductSchema');
// const ProductErrorsResponse = require('../schemas/ProductErrorsResponse');

// const { validation, blank } = ProductSchema;

const getAll = async () => {
  const products = await ProductsModel.getAll();
  // if (blank(products)) return ProductErrorsResponse.errorMessage.noProductFound;
  return products;
};

const getById = async (id) => {
  try {
    // validation(id);
    const productId = await ProductsModel.getById(id);
    // if (ProductSchema.blank(productId)) return ProductErrorsResponse.errorMessage.productNotFound;
    return productId;
  } catch (error) {
    console.log(error);
    return { error: 500, message: 'Erro no Servidor' };
  }
};

module.exports = {
  getAll,
  getById,
};

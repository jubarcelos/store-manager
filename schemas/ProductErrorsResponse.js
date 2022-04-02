const ErrorCodes = require('./HTTPCodes');

const message = {
  nameBlank: 'name is required',
  nameLength: 'length must be at least 5 characters long',
  quantityBlank: 'quantity is required',
  quantityLower: 'quantity must be greater than or equal to 1',
  invalidId: 'Id must be a number!',
  noProductFound: 'No product was found',
  productNotFound: 'Product not found',
  noGet: 'Erro no Servidor',
};

const errorMessage = {
  invalidId: {
    error: { code: ErrorCodes.BAD_REQUEST, message: message.invalidId },
  },
  noProductFound: {
    error: { code: ErrorCodes.NOT_FOUND, message: message.noProductFound },
  },
  productNotFound: {
    error: { code: ErrorCodes.NOT_FOUND, message: message.productNotFound },
  },
  noGet: { error: { code: ErrorCodes.LOCAL_ERROR, message: message.noGet } },
  errorFill: { error: { code: ErrorCodes.FILL, message: message.errorFill } },
};

module.exports = { message, errorMessage };

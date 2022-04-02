const ErrorCodes = require('./HTTPCodes');

  const message = {
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
 };

  module.exports = { message, errorMessage };

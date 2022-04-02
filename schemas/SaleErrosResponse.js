const ErrorCodes = require('./HTTPCodes');

  const message = {
   invalidId: 'Id must be a number!',
   noSaleFound: 'No sales was found',
   saleNotFound: 'Sales not found',
   noGet: 'Erro no Servidor',
 };

  const errorMessage = {
   invalidId: {
     error: { code: ErrorCodes.BAD_REQUEST, message: message.invalidId },
   },
   noSalesFound: {
     error: { code: ErrorCodes.NOT_FOUND, message: message.noSaleFound },
   },
   salesNotFound: {
     error: { code: ErrorCodes.NOT_FOUND, message: message.saleNotFound },
   },
   noGet: { error: { code: ErrorCodes.LOCAL_ERROR, message: message.noGet } },
 };

  module.exports = { message, errorMessage };

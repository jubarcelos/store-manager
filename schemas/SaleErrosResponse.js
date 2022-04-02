const ErrorCodes = require('./HTTPCodes');

  const message = {
   invalidId: 'Id must be a number!',
   noSaleFound: 'No sales was found',
   saleNotFound: 'Sales not found',
   noGet: 'Erro no Servidor',
  //  nameBlank: '"name" is required',
  //  nameLength: '"name" length must be at least 5 characters long',
  //  quantityBlank: '"quantity" is required',
  //  quantityLower: '"quantity" must be greater than or equal to 1',
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
   errorFill: { error: { code: ErrorCodes.FILL, message: message.errorFill } },
 };

  module.exports = { message, errorMessage };

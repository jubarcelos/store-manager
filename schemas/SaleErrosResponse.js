const ErrorCodes = require('./HTTPCodes');

  const message = {
   invalidId: 'Id must be a number!',
   noSaleFound: 'No sales was found',
   saleNotFound: 'Sale not found',
   noGet: 'Erro no Servidor',
   productIdBlank: '"productId" is required',
   quantityBlank: '"quantity" is required',
   quantityLower: '"quantity" must be greater than or equal to 1',
   productIdNotANumber: '"productId" must be a number',
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
   productIdBlank: { error: { code: ErrorCodes.BAD_REQUEST, message: message.productIdBlank } },
   quantityBlank: { error: { code: ErrorCodes.BAD_REQUEST, message: message.quantityBlank } },
   quantityLower: { error: { code: ErrorCodes.FILL, message: message.quantityLower } },
   productIdNotANumber: { error: { code: ErrorCodes.BAD_REQUEST,
    message: message.productIdNotANumber } },
 };

  module.exports = { message, errorMessage };

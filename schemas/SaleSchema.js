const { errorMessage } = require('./SaleErrosResponse');

const isBlank = (value) => (!value);
const quantityIsLower = (quantity) => (quantity < +1);
const quantityBlank = (value) => (!value && value !== 0);

const validation = ([{ productId, quantity }]) => {
  switch (true) {
    case isBlank(productId): return errorMessage.productIdBlank.error;
    case quantityBlank(quantity): return errorMessage.quantityBlank.error;
    case quantityIsLower(quantity): return errorMessage.quantityLower.error;
    default: return {};
 }
};

module.exports = {
  validation,
};

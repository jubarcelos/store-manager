const { errorMessage } = require('./SaleErrosResponse');

const isBlank = (value) => (!value);
const isANumber = (item) => !Number.isNaN(Number(item));
const nameIsLower = (name) => (name.length < +5);
const quantityIsLower = (quantity) => (quantity < +1);

const validation = (name, quantity) => {
  switch (true) {
    case isBlank(name): return errorMessage.nameBlank.error;
    case nameIsLower(name): return errorMessage.nameLength.error;
    case quantityIsLower(quantity): return errorMessage.quantityLower.error;
    default: return {};
 }
};

module.exports = {
  validation,
  isBlank,
  isANumber,
};

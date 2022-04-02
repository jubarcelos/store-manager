const ErrorResponse = require('./SaleErrorsResponse');

const isBlank = (value) => (!value);
const isANumber = (item) => !Number.isNaN(Number(item));
const nameIsLower = (name) => (name.length < 5);
const quantityIsLower = (quantity) => (Number(quantity) < 1);

const validation = (name, quantity) => {
  switch (true) {
    case isBlank(name): return { message: ErrorResponse.nameBlank };
    case nameIsLower(name): return { message: ErrorResponse.nameLength };
    case quantityIsLower(quantity): return { message: ErrorResponse.quantityLower };
    default: return {};
 }
};

module.exports = {
  validation,
  isBlank,
  isANumber,
};

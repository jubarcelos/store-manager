const { errorMessage } = require('./ProductErrorsResponse');

const isBlank = (value) => (!value || value === undefined || value === '');
const quantityBlank = (value) => (!value && value !== 0);
const nameIsLower = (name) => (name.length) < +5;
const quantityIsLower = (quantity) => (quantity < +1);

const validation = ({ name, quantity }) => {
  switch (true) {
    case isBlank(name): return errorMessage.nameBlank.error;
    case nameIsLower(name): return errorMessage.nameLength.error;
    case quantityBlank(quantity): return errorMessage.quantityBlank.error;
    case quantityIsLower(quantity): return errorMessage.quantityLower.error;
    default: return {};
  }
};

module.exports = {
  validation,
};

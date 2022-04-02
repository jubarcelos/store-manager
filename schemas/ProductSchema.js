const ErrorResponse = require('./ProductErrorsResponse');

const blank = (value) => (!value);
const isANumber = (item) => !Number.isNaN(Number(item));

const validation = (id) => {
  switch (true) {
    case blank(id): return { message: ErrorResponse.invalidId };
    case isANumber(id): return { message: ErrorResponse.invalidId };
    default: return {};
 }
};

module.exports = {
  validation,
  blank,
  isANumber,
};

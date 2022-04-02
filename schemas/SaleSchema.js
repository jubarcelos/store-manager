const ErrorsResponse = require('./ProductErrorsResponse');

const blank = (value) => (!value);
const isANumber = (item) => !Number.isNaN(Number(item));

const validation = (id) => {
  switch (true) {
    case blank(id): return { message: ErrorsResponse.invalidId };
    case isANumber(id): return { message: ErrorsResponse.invalidId };
    default: return {};
 }
};

module.exports = {
  validation,
  blank,
  isANumber,
};

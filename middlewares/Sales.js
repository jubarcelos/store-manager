const SaleSchema = require('../schemas/SaleSchema');

const validateTask = (req, res, next) => {
  const validation = SaleSchema.validation(req.body);
  if (validation.message) {
    return res.status(validation.code).json({ message: validation.message });
  }
  next();
};

module.exports = {
  validateTask,
};

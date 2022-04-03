const ProductSchema = require('../schemas/ProductSchema');

const validateTask = (req, res, next) => {
  const validation = ProductSchema.validation(req.body);
  if (validation.message) {
    return res.status(validation.code).json({ message: validation.message });
  }
  next();
};

module.exports = {
  validateTask,
};

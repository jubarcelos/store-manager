const express = require('express');
const ProductsMiddleware = require('../middlewares/Products');

const router = express.Router();

const { getAll, getById, create } = require('../controllers/ProductsController');

router.get('/', getAll);
router.get('/:id', getById);

router.post('/', ProductsMiddleware.validateTask, create);

router.put('/:id', ProductsMiddleware.validateTask);

module.exports = router;

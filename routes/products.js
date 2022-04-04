const express = require('express');
const ProductsMiddleware = require('../middlewares/Products');

const router = express.Router();

const { getAll, getById, create, update, remove } = require('../controllers/ProductsController');

router.get('/', getAll);
router.get('/:id', getById);

router.post('/', ProductsMiddleware.validateTask, create);

router.put('/:id', ProductsMiddleware.validateTask, update);

router.delete('/:id', remove);

module.exports = router;

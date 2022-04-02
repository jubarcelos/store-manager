const express = require('express');
const SaleMiddleware = require('../middlewares/Products');

const router = express.Router();

const { getAll, getById, create } = require('../controllers/SalesController');

router.get('/', getAll);
router.get('/:id', getById);

router.post('/', SaleMiddleware.validateTask, create);

module.exports = router;

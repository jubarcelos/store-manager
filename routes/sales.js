const express = require('express');
const SaleMiddleware = require('../middlewares/Sales');

const router = express.Router();

const { getAll, getById } = require('../controllers/SalesController');

router.get('/', getAll);
router.get('/:id', getById);

router.post('/', SaleMiddleware.validateTask);

router.put('/:id', SaleMiddleware.validateTask);

module.exports = router;

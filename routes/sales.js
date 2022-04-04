const express = require('express');
const SaleMiddleware = require('../middlewares/Sales');

const router = express.Router();

const { getAll, getById, create, update } = require('../controllers/SalesController');

router.get('/', getAll);
router.get('/:id', getById);

router.post('/', SaleMiddleware.validateTask, create);

router.put('/:id', SaleMiddleware.validateTask, update);

// router.delete('/:id', remove);

module.exports = router;

const SalesService = require('../services/SalesService');

const getAll = async (req, res) => {
  try {
    const sales = await SalesService.getAll();
    return res.status(200).json(sales).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

const getById = async (req, res) => {
  try {
    const salesId = await SalesService.getById(req.params.id);
    if (salesId === undefined || salesId.length === 0) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(salesId).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

module.exports = {
  getAll,
  getById,
};

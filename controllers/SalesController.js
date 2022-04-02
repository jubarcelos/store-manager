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
    const saleId = await SalesService.getById(req.params.id);
    if (saleId.message) return res.status(404).json(saleId);
    return res.status(200).json(saleId).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

module.exports = {
  getAll,
  getById,
};

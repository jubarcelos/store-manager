const { expect } = require('chai');
const sinon = require('sinon');
const SalesMock = require('../Mocks/SalesMock');
const SalesService = require('../../../services/SalesService');
const SalesController = require('../../../controllers/SalesController');
const { message } = require('../../../schemas/SaleErrosResponse');


describe('Controller', () => {
  describe('SalesController', () => {
    describe('getAll', () => {
      describe('when the table do not have this product', () => {
        const req = {};
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns(res);
          sinon.stub(SalesService, 'getAll').returns(SalesMock.emptySales);
        });
        after(() => {
          SalesService.getAll.restore();
        });

        it('should call a function `res.status` and got value (404)', async () => {
          await SalesController.getAll(req, res);
          expect(res.status.calledWith(200)).to.be.true;
        });
         it('should call a function and got a res.json with []', async () => {
            await SalesController.getAll(req, res);
            expect(res.json.calledWith(SalesMock.emptySales)).to.be.true;
        });

      });
      describe('when the table have this product', () => {
        const req = {};
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();

          sinon.stub(SalesService, 'getAll').returns(SalesMock.fullSales);
        });
        after(() => {
          SalesService.getAll.restore();
        });

        it('should call a function `res.status` and got value (200)', async () => {
          await SalesController.getAll(req, res);
          expect(res.status.calledWith(200)).to.be.true;
        });
         it('should call a function `res.json` and got as answer an array', async () => {
            await SalesController.getAll(req, res);
            expect(res.json.calledWith(SalesMock.fullSales)).to.be.true;
        });
      });
    });
  });




  describe('getById', () => {
    describe('when the table do not have this product', () => {
      const req = { params: { id: 1 } };
      const res = {};

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        sinon.stub(SalesService, 'getById').returns();
      });
      after(() => {
        SalesService.getById.restore();
      });

      it('should call a function `res.status` and got value (404)', async () => {
        await SalesController.getById(req, res);
        expect(res.status.calledWith(404)).to.be.true;
      });
       it('should call a function and got a res.json with []', async () => {
          await SalesController.getById(req, res);
          expect(res.json.calledWith({ message: message.saleNotFound })).to.be.true;
      });

    });
    describe('when the table have this product', () => {
      const req = { params: { id: 1 } };
      const res = {};

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();

        sinon.stub(SalesService, 'getById').returns(SalesMock.fullSales[0]);
      });
      after(() => {
        SalesService.getById.restore();
      });

      it('should call a function `res.status` and got value (200)', async () => {
        await SalesController.getById(req,res);
        expect(res.status.calledWith(200)).to.be.true;
      });
       it('should call a function `res.json` and got as answer an array', async () => {
          await SalesController.getAll(req, res);
          expect(res.json.calledWith(SalesMock.fullSales[0])).to.be.true;
      });
    });
  });
});

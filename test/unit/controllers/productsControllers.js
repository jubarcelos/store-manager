const { expect } = require('chai');
const sinon = require('sinon');
const ProductsMock = require('../Mocks/ProductsMock');
const ProductsService = require('../../../services/ProductsService');
const ProductsController = require('../../../controllers/productsController');
const { message } = require('../../../schemas/ProductErrorsResponse');


describe('Controller', () => {
  describe('ProductsController', () => {
    describe('getAll', () => {
      describe('when the table do not have this product', () => {
        const req = {};
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns(res);
          sinon.stub(ProductsService, 'getAll').returns(ProductsMock.emptyProducts);
        });
        after(() => {
          ProductsService.getAll.restore();
        });

        it('should call a function `res.status` and got value (404)', async () => {
          await ProductsController.getAll(req, res);
          expect(res.status.calledWith(200)).to.be.true;
        });
         it('should call a function and got a res.json with []', async () => {
            await ProductsController.getAll(req, res);
            expect(res.json.calledWith(ProductsMock.emptyProducts)).to.be.true;
        });

      });
      describe('when the table have this product', () => {
        const req = {};
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns(res);

          sinon.stub(ProductsService, 'getAll').returns(ProductsMock.fullProducts[0]);
        });
        after(() => {
          ProductsService.getAll.restore();
        });

        it('should call a function `res.status` and got value (200)', async () => {
          await ProductsController.getAll(req, res);
          expect(res.status.calledWith(200)).to.be.true;
        });
         it('should call a function `res.json` and got as answer an array', async () => {
            await ProductsController.getAll(req, res);
            expect(res.json.calledWith(ProductsMock.fullProducts[0])).to.be.true;
        });
      });
    });


    describe('getById', () => {
      describe('when the table do not have this product', () => {
        const req = { params: { id: 1 } };
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns(res);
          sinon.stub(ProductsService, 'getById').returns();
        });
        after(() => {
          ProductsService.getById.restore();
        });

        it('should call a function `res.status` and got value (404)', async () => {
          await ProductsController.getById(req, res);
          expect(res.status.calledWith(404)).to.be.true;
        });
         it('should call a function and got a res.json with []', async () => {
            await ProductsController.getById(req, res);
            expect(res.json.calledWith({ message: message.productNotFound })).to.be.true;
        });

      });
      describe('when the table have this product', () => {
        const req = { params: { id: 1 } };
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();

          sinon.stub(ProductsService, 'getById').returns(ProductsMock.fullProducts[0]);
        });
        after(() => {
          ProductsService.getById.restore();
        });

        it('should call a function `res.status` and got value (200)', async () => {
          await ProductsController.getById(req,res);
          expect(res.status.calledWith(200)).to.be.true;
        });
         it('should call a function `res.json` and got as answer an array', async () => {
            await ProductsController.getById(req, res);
            expect(res.json.calledWith(ProductsMock.fullProducts[0])).to.be.true;
        });
      });
    });
  });
});

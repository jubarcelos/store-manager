const { expect } = require('chai');
const sinon = require('sinon');
const ProductsMock = require('../Mocks/ProductsMock');
const ProductsService = require('../service/ProductsServices');
const ProductsController = require('../controllers/productsControllers');

const { message } = require('../../schemas/ProductErrorsResponse.js');

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
          expect(res.status.calledWith(404)).to.be.true;
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
          res.json = sinon.stub();

          sinon.stub(ProductsService, 'getAll').returns(ProductsMock.fullProducts);
        });
        after(() => {
          ProductsServices.getAll.restore();
        });

        it('should call a function `res.status` and got value (200)', async () => {
          await ProductsController.getAll(req, res);
          expect(res.status.calledWith(200)).to.be.true;
        });
         it('should call a function `res.json` and got as answer an array', async () => {
            await ProductsController.getAll(req, res);
            expect(res.json.calledWith(ProductsMock.fullProducts)).to.be.true;
        });
      });
    });
  });
});

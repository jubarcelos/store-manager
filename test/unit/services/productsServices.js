const { expect } = require('chai');
const sinon = require('sinon');
const ProductsService = require('../service/ProductsServices');
const ProductsModel = require('../models/ProductsModel');
const ProductsMock = require('../Mocks/ProductsMock');

describe('Services', () => {
  describe('ProductsServices', () => {
    describe('getAll', () => {
      describe('when the table do not have Products', () => {
        before(() => {
          sinon.stub(ProductsModel, 'getAll').resolves(ProductsMock.emptyProducts)});

        it('should call a function to make a request to model and return a error', async () => {
          const products = await ProductsService.getAll();
            expect((products).to.be.deep.eq(ProductsMock.emptyProducts));
        });
      });
      describe('when the table have Products', () => {
        before(() => {
          sinon.stub(ProductsModel, 'getAll').resolves(ProductsMock.fullProducts)});

        it('should call a function to make a request to model and got all Products', async () => {
          const products = await ProductsService.getAll();
          expect(products).to.deep.eq(ProductsMock.fullProducts);
        });
      });
    });
  });
});

const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connect_mysql');
const ProductsModel = require('../../../models/ProductsModel');
const ProductsMock = require('../Mocks/ProductsMock');

describe('Models', () => {
  describe('ProductsModels', () => {
    describe('getAll', () => {
      describe('when the table Products do not have products', () => {
        before(() => {
          sinon.stub(connection, 'execute').returns([ProductsMock.emptyProducts])
        });
        after(() => {
          connection.execute.restore();
        });

        it('should call a array empty', async () => {
          const products = await ProductsModel.getAll();
          expect(products).to.be.deep.eq(ProductsMock.emptyProducts);
        });
      });

      describe('when the table Products have products', () => {
        before(() => {
          sinon.stub(connection, 'execute').returns([ProductsMock.fullProducts])});
        after(() => {
          connection.execute.restore();
        });

         it('should call a function and got as answer a fulled array', async () => {
          const products = await ProductsModel.getAll();
            expect(products).to.be.deep.eq(ProductsMock.fullProducts);
        });
      });
    });
  });
});

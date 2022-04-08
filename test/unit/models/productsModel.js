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

// ------------------------ Test to getById function. ----------------------
describe('getById', () => {
  describe('when the table Products do not have this product', () => {
    before(() => {
      sinon.stub(connection, 'execute').returns([ProductsMock.emptyProducts])
    });
    after(() => {
      connection.execute.restore();
    });

    it('should call a array empty', async () => {
      const products = await ProductsModel.getById(5);
      expect(products).to.be.deep.eq(ProductsMock.emptyProducts);
    });
  });

  describe('when the table Products have this products', () => {
    before(() => {
      sinon.stub(connection, 'execute').returns([ProductsMock.fullProducts[0]])});
    after(() => {
      connection.execute.restore();
    });

     it('should call a function and got as answer a fulled array', async () => {
      const products = await ProductsModel.getById(ProductsMock.fakeIdOne);
        expect(products).to.be.deep.eq(ProductsMock.fullProducts[0]);
    });
  });
});


// ------------------------ Test to getById function. ----------------------


// ------------------------ Test to create function. -----------------------


// ------------------------ Test to update function. -----------------------


// ------------------------ Test to remove function. -----------------------
  });
});

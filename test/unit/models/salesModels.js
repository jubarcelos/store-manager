const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../models/connect_mysql');
const SalesModel = require('../../models/SalesModel');
const SalesMock = require('../Mock/SalesMock');

describe('Models', () => {
  describe('SalesModels', () => {
    describe('getAll', () => {
      describe('when the table Sales do not have Sales', () => {
        before(() => {
          sinon.stub(connection, 'execute').returns([SalesMock.emptySales])
        });
        after(() => {
          connection.execute.restore();
        });

        it('should call a array empty', async () => {
          const sales = await SalesModel.getAll();
          expect(sales).to.be.deep.eq(SalesMock.emptySales);
        });
      });

      describe('when the table Sales have Sales', () => {
        before(() => {
          sinon.stub(connection, 'execute').returns([SalesMock.fullSales])});
        after(() => {
          connection.execute.restore();
        });

         it('should call a function and got as answer a fulled array', async () => {
          const sales = await SalesModel.getAll();
            expect((sales).to.be.deep.eq(SalesMock.fullSales));
        });
      });
    });
  });
});

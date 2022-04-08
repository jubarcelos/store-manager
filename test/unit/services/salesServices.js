const { expect } = require('chai');
const sinon = require('sinon');
const SalesService = require('../service/SalesServices');
const SalesModel = require('../models/SalesModel');
const SalesMock = require('../Mock/SalesMock');

describe('Services', () => {
  describe('SalesServices', () => {
    describe('getAll', () => {
      describe('when the table do not have Sales', () => {
        before(() => {
          sinon.stub(SalesModel, 'getAll').resolves(SalesMock.emptySales)});

        it('should call a function to make a request to model and return a error', async () => {
          const Sales = await SalesService.getAll();
            expect((Sales).to.be.deep.eq(SalesMock.emptySales));
        });
      });
      describe('when the table have Sales', () => {
        before(() => {
          sinon.stub(SalesModel, 'getAll').resolves(SalesMock.fullSales)});

        it('should call a function to make a request to model and got all Sales', async () => {
          const Sales = await SalesService.getAll();
          expect(Sales).to.deep.eq(SalesMock.fullSales);
        });
      });
    });
  });
});

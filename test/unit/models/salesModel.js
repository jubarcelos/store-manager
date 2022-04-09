const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connect_mysql');
const SalesModel = require('../../../models/SalesModel');
const SalesMock = require('../Mocks/SalesMock');

describe('Models', () => {
  describe('SalesModels', () => {
    describe('getAll', () => {
      describe('when the table Sales have Sales', () => {
        before(() => {
          sinon.stub(connection, 'execute').resolves([SalesMock.fullSales])});
        after(() => {
          connection.execute.restore();
        });

         it('should call a function and got as answer a fulled array', async () => {
          const sales = await SalesModel.getAll();
            expect(sales).to.be.deep.equal(SalesMock.fullSales);
        });
      });
    });

// ------------------------ Test to getById function. ----------------------

describe("getById", () => {
  describe("when the table have this sale id", () => {
    before(() => {
      sinon
        .stub(connection, "execute")
        .returns(SalesMock.fullSales);
    });
    after(() => {
      connection.execute.restore();
    });

    it("return a array with all sales into that iD", async () => {
      const sale = await SalesModel.getById(SalesMock.fakeIdOne);
      expect(sale).to.be.deep.equal(SalesMock.fullSales[0]);
    });
  });
});


// ---------------------- Test to createSaleId function. -------------------
describe("createSaleId", () => {
  describe("when the table can create a sale id", () => {
    before(() => {
      sinon
        .stub(connection, "execute")
        .returns(SalesMock.createSuccessResponse);
    });
    after(() => {
      connection.execute.restore();
    });

    it("create and return a sale iD", async () => {
      const sale = await SalesModel.createSaleId();
      expect(sale).to.be.eq(SalesMock.fakeIdOne);
    });
  });
});

// ------------------------ Test to create function. -----------------------

describe("create", () => {
  describe("when the table can create a sale", () => {
    before(() => {
      sinon
        .stub(connection, "execute")
        .resolves(SalesMock.createSuccessResponse);
    });
    after(() => {
      connection.execute.restore();
    });

    it("create and return a object with saleId and itemsSold", async () => {
      const sale = await SalesModel.create(SalesMock.fakeBodyFulled, SalesMock.fakeIdOne);
      expect(sale).to.be.deep.equal(SalesMock.createdSuccess);
    });
  });
});

// ------------------------ Test to update function. -----------------------

// describe("update", () => {
  
//   describe("when the table can update a sale", () => {
//     before(() => {
//       sinon
//         .stub(connection, "execute")
//         .resolves(SalesMock.updateSuccessResponse);
//     });
//     after(() => {
//       connection.execute.restore();
//     });

//     it("update and return a object with saleId and itemsSold", async () => {
//       const sale = await SalesModel.update(SalesMock.fakeBodyFulled, SalesMock.fakeIdOne);
//       expect(sale).to.be.deep.equal(SalesMock.updatedSuccess);
//     });
//   });
// });

// ------------------------ Test to remove function. -----------------------
  });
});

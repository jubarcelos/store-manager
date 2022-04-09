const { expect } = require('chai');
const sinon = require('sinon');
const ProductsMock = require('../Mocks/ProductsMock');
const ProductsService = require('../../../services/ProductsService');
const ProductsController = require('../../../controllers/ProductsController');
const ProductsModel = require('../../../models/ProductsModel');
const Code = require('../../../schemas/HTTPCodes');
const { message } = require('../../../schemas/ProductErrorsResponse');


describe('Controller', () => {
  describe('ProductsController', () => {
    describe('getAll', () => {
      describe('when the table do not have any products', () => {
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
          expect(res.status.calledWith(Code.OK)).to.be.true;
        });
         it('should call a function and got a res.json with []', async () => {
            await ProductsController.getAll(req, res);
            expect(res.json.calledWith(ProductsMock.emptyProducts)).to.be.true;
        });

      });
      describe('when the table have some products', () => {
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
          expect(res.status.calledWith(Code.OK)).to.be.true;
        });
         it('should call a function `res.json` and got as answer a fulled array', async () => {
            await ProductsController.getAll(req, res);
            expect(res.json.calledWith(ProductsMock.fullProducts[0])).to.be.true;
        });
      });
    });

// ------------------------ Test to getById function. -----------------------


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
          expect(res.status.calledWith(Code.NOT_FOUND)).to.be.true;
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
          expect(res.status.calledWith(Code.OK)).to.be.true;
        });
         it('should call a function `res.json` and got as answer an array with one object inside', async () => {
            await ProductsController.getById(req, res);
            expect(res.json.calledWith(ProductsMock.fullProducts[0])).to.be.true;
        });
      });
    });

// ------------------------ Test to create function. -----------------------

describe('create', () => {
  describe('when the table do not have this product', () => {
    const req = { body: ProductsMock.fakeBodyFulled };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(ProductsService, 'create').returns(ProductsMock.fullProducts[0]);
    });
    after(() => {
      ProductsService.create.restore();
    });

    it('should call a function `res.status` and got value (201)', async () => {
      await ProductsController.create(req,res);
      expect(res.status.calledWith(Code.CREATED)).to.be.true;
    });
     it('should call a function `res.json` and got as answer an array with one object inside', async () => {
        await ProductsController.create(req, res);
        expect(res.json.calledWith(ProductsMock.fullProducts[0])).to.be.true;
    });
  });

  describe('when the table already have this product', () => {
    const req = { params: { id: 1 } };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(ProductsModel, 'getByName').returns(ProductsMock.createProductSuccess);
    });
    after(() => {
      ProductsModel.getByName.restore();
    });

    it('should call a function `res.status` and got value (409)', async () => {
      await ProductsController.create(req, res);
      expect(res.status.calledWith(Code.ALREADY_EXIST)).to.be.true;
    });
     it('should call a function and got a res.json with []', async () => {
        await ProductsController.create(req, res);
        expect(res.json.calledWith({ message: message.alreadyExists })).to.be.true;
    });

  });
});

// ------------------------ Test to update function. -----------------------

// describe('update', () => {

//   describe.only('when the table do not have this product', () => {
//     const req = { body: ProductsMock.fakeBodyChange, params: { id: ProductsMock.fakeIdOne } };
//     const res = {};

//     before(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns(res);

//       sinon.stub(ProductsService, 'update').resolves(undefined);
//       sinon.stub(ProductsService, 'getById').resolves(ProductsMock.emptyProducts);
//     });
//     after(() => {
//       ProductsService.update.restore();
//       ProductsService.getById.restore();
//     });

//     it('should call a function `res.status` and got value (404)', async () => {
//       await ProductsController.update(req,res);
//       expect(res.status.calledWith(Code.NOT_FOUND)).to.be.true;
//     });
//      it('should call a function `res.json` and got as answer an array empty', async () => {
//         await ProductsController.update(req, res);
//         expect(res.json.calledWith(ProductsMock.emptyProducts)).to.be.true;
//     });
//   });

//   describe('when the table have this product', () => {
//     const req = { body: ProductsMock.fakeBodyChange, params: { id: ProductsMock.fakeIdOne } };
//     const res = {};

//     before(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns(res);
//       sinon.stub(ProductsModel, 'getById').resolves(ProductsMock.createProductSuccess);
//       sinon.stub(ProductsService, 'update').resolves(ProductsMock.updateProductSuccess);
//     });
//     after(() => {
//       ProductsModel.getById.restore();
//       ProductsService.update.restore();
//     });

//     it('should call a function `res.status` and got value (200)', async () => {
//       await ProductsController.update(req, res);
//       expect(res.status.calledWith(Code.OK)).to.be.true;
//     });
//      it('should call a function and got a res.json with []', async () => {
//         await ProductsController.update(req, res);
//         expect(res.json.calledWith({ message: updateProductSuccess })).to.be.true;
//     });

//   });
// });

// ------------------------ Test to remove function. -----------------------

  });
});

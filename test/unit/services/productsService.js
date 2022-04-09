const { expect } = require("chai");
const sinon = require("sinon");
const ProductsService = require("../../../services/ProductsService");
const ProductsModel = require("../../../models/ProductsModel");
const ProductsMock = require("../Mocks/ProductsMock");
const { errorMessage } = require("../../../schemas/ProductErrorsResponse");

describe("Services", () => {
  describe("ProductsServices", () => {
    describe("getAll", () => {
      describe("when the table do not have Products", () => {
        before(() => {
          sinon
            .stub(ProductsModel, "getAll")
            .resolves(ProductsMock.emptyProducts);
        });
        after(() => {
          ProductsModel.getAll.restore();
        });

        it("should call a function to make a request to model and return a error", async () => {
          const products = await ProductsService.getAll();
          expect(products).to.be.deep.eq(ProductsMock.emptyProducts);
        });
      });
      describe("when the table have Products", () => {
        before(() => {
          sinon
            .stub(ProductsModel, "getAll")
            .resolves(ProductsMock.fullProducts);
        });
        after(() => {
          ProductsModel.getAll.restore();
        });

        it("should call a function to make a request to model and got all Products", async () => {
          const products = await ProductsService.getAll();
          expect(products).to.deep.equal(ProductsMock.fullProducts);
        });
      });
    });

    // ------------------------ Test to getById function. ----------------------
    describe("getById", () => {
      describe("when the table do not have Products", () => {
        before(() => {
          sinon
            .stub(ProductsModel, "getById")
            .resolves(ProductsMock.emptyProducts);
        });
        after(() => {
          ProductsModel.getById.restore();
        });

        it("should call a function to make a request to model and return a error", async () => {
          const products = await ProductsService.getById();
          expect(products).to.be.deep.eq(ProductsMock.emptyProducts);
        });
      });
      describe("when the table have Products", () => {
        before(() => {
          sinon
            .stub(ProductsModel, "getById")
            .resolves(ProductsMock.fullProducts[0]);
        });
        after(() => {
          ProductsModel.getById.restore();
        });

        it("should call a function to make a request to model and got all Products", async () => {
          const products = await ProductsService.getById(
            ProductsMock.fakeIdOne
          );
          expect(products).to.deep.eq(ProductsMock.fullProducts[0]);
        });
      });
    });

    // ------------------------ Test to create function. -----------------------

    describe("create", () => {
      describe("when the table do not have this products", () => {
        before(() => {
          sinon.stub(ProductsModel, "create").resolves(ProductsMock.fakeIdOne);
          sinon
            .stub(ProductsModel, "getById")
            .resolves(ProductsMock.fakeProduct);
          sinon.stub(ProductsModel, "getByName").resolves(undefined);
        });
        after(() => {
          ProductsModel.create.restore();
          ProductsModel.getById.restore();
          ProductsModel.getByName.restore();
        });

        it("should call a function to introduce a new product in table and return that product", async () => {
          const products = await ProductsService.create(
            ProductsMock.fakeBodyFulled,
            ProductsMock.fakeIdOne
          );
          expect(products).to.be.deep.equal(ProductsMock.createProductSuccess);
        });
      });
    });

    // não consegui criar o que não consegue criar.

    // ------------------------ Test to update function. -----------------------

    describe("update", () => {
      describe("when the table do not have this products", () => {
        before(() => {
          sinon.stub(ProductsModel, "update").resolves(ProductsMock.updateProductSuccess);
          sinon.stub(ProductsModel, "getById").resolves(undefined);
        });
        after(() => {
          ProductsModel.update.restore();
          ProductsModel.getById.restore();
        });

        it("should call a function to introduce a new product in table and return that product", async () => {
          const products = await ProductsService.update(
            ProductsMock.fakeBodyChange,
            ProductsMock.fakeIdOne
          );
          expect(products).to.be.deep.equal(errorMessage.productNotFound.error);
        });
      });
      // describe("when the table do not have this products", () => {
      //   before(() => {
      //     sinon.stub(ProductsModel, "update").resolves(ProductsMock.updateProductSuccess);
      //     sinon.stub(ProductsModel, "getById").resolves(undefined);
      //   });
      //   after(() => {
      //     ProductsModel.update.restore();
      //     ProductsModel.getById.restore();
      //   });

      //   it("should call a function to introduce a new product in table and return that product", async () => {
      //     const products = await ProductsService.update(
      //       ProductsMock.fakeBodyChange,
      //       ProductsMock.fakeIdOne
      //     );
      //     expect(products).to.be.deep.equal(ProductsMock.updateProductSuccess);
      //   });
      // });
    });
    // não consegui criar o que não consegue fazer update.

    // ------------------------ Test to remove function. -----------------------

    describe("remove", () => {
      describe("when the table have this products", () => {
        before(() => {
          sinon.stub(ProductsModel, "remove").resolves({});
          sinon.stub(ProductsModel, "getById").resolves(ProductsMock.fakeProduct);
        });
        after(() => {
          ProductsModel.remove.restore();
          ProductsModel.getById.restore();
        });

        it("should call a function to remove a product in table", async () => {
          const products = await ProductsService.remove(ProductsMock.fakeIdOne);
          expect(products).to.be.deep.equal(ProductsMock.fakeIdOne);
        });
      });
    });
    // não consegui criar o que não consegue fazer update.
  });
});

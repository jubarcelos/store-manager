const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../models/connect_mysql");
const ProductsModel = require("../../../models/ProductsModel");
const ProductsMock = require("../Mocks/ProductsMock");

describe("Models", () => {
  describe("ProductsModels", () => {
    describe("getAll", () => {
      describe("when the table Products have products", () => {
        before(() => {
          sinon
            .stub(connection, "execute")
            .returns([ProductsMock.fullProducts]);
        });
        after(() => {
          connection.execute.restore();
        });

        it("should call a function and got as answer a fulled array", async () => {
          const products = await ProductsModel.getAll();
          expect(products).to.be.deep.eq(ProductsMock.fullProducts);
        });
      });
    });

    // ------------------------ Test to getById function. ----------------------

    describe("getById", () => {
      describe("when the table Products have this product id", () => {
        before(() => {
          sinon
            .stub(connection, "execute")
            .returns([[ProductsMock.fakeProduct]]);
        });
        after(() => {
          connection.execute.restore();
        });

        it("return a object with all product information", async () => {
          const products = await ProductsModel.getById(ProductsMock.fakeIdOne);
          expect(products).to.be.deep.eq(ProductsMock.fakeProduct);
        });
      });
    });

    // ------------------------ Test to getByName function. ----------------------

    describe("getByName", () => {
      describe("when the table Products have this product NAME", () => {
        before(() => {
          sinon
            .stub(connection, "execute")
            .returns([[ProductsMock.fakeProduct]]);
        });
        after(() => {
          connection.execute.restore();
        });

        it("return a object with all product information", async () => {
          const products = await ProductsModel.getByName(
            ProductsMock.fakeProduct.name
          );
          expect(products).to.be.deep.eq(ProductsMock.fakeProduct);
        });
      });
    });

    // ------------------------ Test to create function. -----------------------

    describe("create", () => {
      describe("when the table Products do not have this product yet", () => {
        before(() => {
          sinon
            .stub(connection, "execute")
            .resolves(ProductsMock.createProductSuccessResponse);
        });
        after(() => {
          connection.execute.restore();
        });

        it("should return a id to new product created", async () => {
          const products = await ProductsModel.create(
            ProductsMock.fakeBodyChange
          );
          expect(products).to.be.deep.equal(ProductsMock.fakeIdOne);
        });
      });
    });

    // ------------------------ Test to update function. -----------------------

    describe("update", () => {
      describe("when the table products was updated", () => {
        before(() => {
          sinon
            .stub(connection, "execute")
            .resolves(ProductsMock.updateProductSuccess);
        });
        after(() => {
          connection.execute.restore();
        });

        it("should return a product updated", async () => {
          const products = await ProductsModel.update(
            ProductsMock.fakeBodyChange,
            ProductsMock.fakeIdOne
          );
          expect(products).to.be.deep.equal(ProductsMock.updateProductSuccess);
        });
      });
    });
    // ------------------------ Test to remove function. -----------------------
    describe("remove", () => {
      describe("when the table products was deleted", () => {
        before(() => {
          sinon.stub(connection, "execute").resolves({});
        });
        after(() => {
          connection.execute.restore();
        });

        it("should return a product removed", async () => {
          const products = await ProductsModel.remove(ProductsMock.fakeIdOne);
          expect(products).to.be.deep.equal({});
        });
      });
    });
  });
});

const { expect } = require('chai');
const sinon = require('sinon');
describe("Product Models", () => {

  describe("valida requisição de produto", () => {
    before(()=> {
      sinon.stub(CustomerService,'create').resolves(fakeCustomer);
    })

    after(()=>{
      CustomerService.create.restore()
    })

    it("executou status e json esperados", async () => {  
      await CustomerController.create(request, response);

      
      expect(response.status.calledWith(201)).to.be.equal(true)
      expect(response.json.calledWith(fakeCustomer)).to.be.equal(true)
    });
  });
});

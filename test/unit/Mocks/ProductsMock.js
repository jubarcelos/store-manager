const fakeIdOne = 1;
const fakeIdTwo = 2;

const emptyProducts = [];

const fullProducts = [
  {
    id: fakeIdOne,
    name: 'produto 1',
    quantity: 1,
  },
  {
    id: fakeIdTwo,
    name: 'produto 2',
    quantity: 2,
  },
  {
    id: fakeIdTwo,
    name: 'produto 3',
    quantity: 3,
  },
];

const fakeBodyFulled = { name: "produto 1", quantity: 1 }
const fakeBodyExistent = { name: "produto 2", quantity: 2 }

const fakeBodyNullName = { quantity: 1 }
const fakeBodyNulQuantity = { name: "produto 1"}

const createProductSuccessResponse =  [{ insertId: 1}]
const createProductSuccess =  { id: 1, name: "produto 1", quantity: 1 }

const updateProductSuccessResponse =  [{ affectedRows: 1}]
const updateProductSuccess =  {id: 1, name: "produto alterado", quantity: 10}
const fakeBodyChange = { name: "produto alterado", quantity: 10 }

module.exports = {
  fakeIdOne,
  fakeIdTwo,
  emptyProducts,
  fullProducts,
  fakeBodyFulled,
  fakeBodyExistent,
  fakeBodyNullName,
  fakeBodyNulQuantity,
  createProductSuccess,
  createProductSuccessResponse,
  updateProductSuccessResponse,
  updateProductSuccess,
  fakeBodyChange,
};


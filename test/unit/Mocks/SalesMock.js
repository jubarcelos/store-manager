const fakeIdOne = 1;
const fakeIdTwo = 2;

const emptySales = [];

const fullSales = [

  {
    saleId: fakeIdOne,
    date: '2021-09-09T04:54:29.000Z',
    productId: fakeIdOne,
    quantity: 2,
  },
  {
    saleId: fakeIdTwo,
    date: '2021-09-09T04:54:54.000Z',
    productId: fakeIdTwo,
    quantity: 2,
  },
  {
    saleId: fakeIdTwo,
    date: '2021-09-19T04:54:54.000Z',
    productId: fakeIdTwo,
    quantity: 6,
  },
];



const fakeBodyFulled =  [
  {
    productId: 1,
    quantity: 2
  },
  {
    productId: 2,
    quantity: 5
  }
]


const bodyUpdated =   [
  {
    "productId": 1,
    "quantity": 6
  }
]

const createSuccessResponse =  [{ insertId: 1}]

const createSuccess =  {
  id: 1,
  itemsSold: [
    {
      productId: 1,
      quantity: 2
    },
    {
      productId: 2,
      quantity: 5
    }
  ]
}

const updateSuccessResponse =  [{ affectedRows: 1}]

const updateSuccess =  {
  saleId: 1,
  itemUpdated: [
    {
      productId: 1,
      quantity: 6
    }
  ]
}

module.exports = {
  fakeIdOne,
  fakeIdTwo,
  emptySales,
  fullSales,
  fakeBodyFulled,
  createSuccess,
  createSuccessResponse,
  updateSuccessResponse,
  updateSuccess,
  bodyUpdated,
};

const SALES_LIST = [
  {
    id: 1,
    user_id: 1,
    seller_id: 2,
    total_price: 22.0,
    delivery_address: "Rua dez",
    delivery_number: "150",
    sale_date: "2021-11-30",
    status: "entregue",
  },
  {
    id: 2,
    user_id: 1,
    seller_id: 2,
    total_price: 33.0,
    delivery_address: "Rua dez",
    delivery_number: "150",
    sale_date: "2021-12-24",
    status: "entregue",
  },
];

const SALE_RESPONSE = {
  id: 1,
  userId: 1,
  sellerId: 2,
  totalPrice: "22.00",
  deliveryAddress: "Rua dez",
  deliveryNumber: "150",
  saleDate: "2021-11-30T00:00:00.000Z",
  status: "entregue",
  seller: {
    name: "Fulana Pereira",
  },
  saleProducts: [
    {
      id: 2,
      name: "Heineken 600ml",
      price: "7.50",
      urlImage: "http://localhost:3001/images/heineken_600ml.jpg",
      quantity: 2,
    },
  ],
};

const SALE_TO_CREATE = {
  userId: 1,
  sellerId: 2,
  totalPrice: "50.00",
  deliveryAddress: "Rua 2",
  deliveryNumber: "123123123",
  status: "Pendente",
  salesProducts: [
    {
      id: 1,
      quantity: 4,
    },
    {
      id: 2,
      quantity: 3,
    },
  ],
};

const RESPONSE_SALE_CREATED = {
  userId: 1,
  sellerId: 2,
  totalPrice: "50.00",
  deliveryAddress: "Rua 2",
  deliveryNumber: "123123123",
  status: "Pendente",
  salesProducts: [
    {
      id: 1,
      name: "Skol Lata 250ml",
      price: "2.20",
      urlImage: "http://localhost:3001/images/skol_lata_350ml.jpg",
      quantity: 4,
    },
    {
      id: 2,
      name: "Heineken 600ml",
      price: "7.50",
      urlImage: "http://localhost:3001/images/heineken_600ml.jpg",
      quantity: 3,
    },
  ],
};

module.exports = {
  SALES_LIST,
  SALE_RESPONSE,
  SALE_TO_CREATE,
  RESPONSE_SALE_CREATED,
};

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        id: 1,
        user_id: 1,
        seller_id: 2,
        total_price: 22.00,
        delivery_address: "Rua dez",
        delivery_number: "150",
        sale_date: "2021-11-30",
        status: "entregue"
      },
      {
        id: 2,
        user_id: 1,
        seller_id: 2,
        total_price: 33.00,
        delivery_address: "Rua dez",
        delivery_number: "150",
        sale_date: "2021-12-24",
        status: "entregue"
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};

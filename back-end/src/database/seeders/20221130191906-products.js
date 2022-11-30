module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('products',
      [{
        id: 1,
        name: 'Brahma Latao',
        price: 4.50,
        url_image: 'foto da brahma',
      },
      {
        id: 2,
        name: 'Coca Cola 2Lts',
        price: 11.00,
        url_image: 'foto da coca cola',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};

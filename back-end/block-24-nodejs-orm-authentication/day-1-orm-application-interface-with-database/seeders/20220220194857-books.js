'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      title: 'Pedra Filosofial',
      author: 'JK Rowling',
      page_quantity: 200,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};

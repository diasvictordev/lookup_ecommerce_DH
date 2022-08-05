'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      cart_id: {
        type: sequelize.STRING,
        allowNull: false
      },
      product_id: {
        type: sequelize.STRING,
        allowNull: false
      },
      user_id: {
        type: sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('cart');
  }
};

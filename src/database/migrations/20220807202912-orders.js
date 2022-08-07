'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      order_id: {
        type: sequelize.STRING,
        allowNull: false
      },
      order_status: {
        type: sequelize.STRING,
        allowNull: false
      },
      cart_id: {
        type: sequelize.STRING,
        allowNull: false
      },
      payment_method: {
        type:sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('orders');
  }
};

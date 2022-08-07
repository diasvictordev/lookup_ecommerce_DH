'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('products', { 
      product_id: {
        type: sequelize.STRING,
        allowNull: false
      },
      price: {
        type: sequelize.INTEGER,
        allowNull: false
      },
      category: {
        type: sequelize.STRING,
        allowNull: false
      },
      amount: {
        type: sequelize.INTEGER,
        allowNull: false
      },
      state:{
        type: sequelize.STRING,
        allowNull: false
      },
      name: {
        type: sequelize.STRING,
        allowNull: false
      },
      description: {
        type: sequelize.STRING,
        allowNull: false
      },
      brand: {
        type: sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('products');
  
  }
};

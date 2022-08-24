'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('products', { 
      product_id: {
        type: sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      price: {
        type: sequelize.FLOAT,
        allowNull: false
      },        discount: {
        type: sequelize.INTEGER,
        allowNull: false
      },
      price_discount:{
        type: sequelize.FLOAT,
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
        type: sequelize.TEXT,
        allowNull: false
      },
      description_2: {
        type: sequelize.TEXT,
        allowNull: false
      },
      image: {
        type: sequelize.STRING,
        allowNull: false
      },
      extension: {
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

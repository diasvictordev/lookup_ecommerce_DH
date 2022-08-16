"use strict";

const sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("adress", {
      adress_id: {
        type: sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      cep: {
        type: sequelize.INTEGER(8),
        allowNull: false,
      },
      state: {
        type: sequelize.STRING,
        allowNull: false,
      },
      number_adress: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: sequelize.STRING,
        allowNull: false,
      },
      district: {
        type: sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.dropTable('adress');
  },
};

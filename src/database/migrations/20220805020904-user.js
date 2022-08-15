"use strict";

const sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      user_name: {
        type: sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: sequelize.STRING,
        allowNull: false
      },
      tel: {
        type: sequelize.STRING,
        allowNull: false
      },
      email:{
        type: sequelize.STRING,
        allowNull: false
      },
      user_password: {
        type: sequelize.STRING,
        allowNull: false
      },
      date_birthday: {
        type: sequelize.DATE,
        allowNull: false
      },
      cpf: {
        type: sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
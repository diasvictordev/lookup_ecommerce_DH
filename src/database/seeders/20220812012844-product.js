"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("product", [
      {
        product_id: uuidv4().toString(),
        price: 1200,
        category: "Notebook",
        amount: 26,
        state: "Em oferta",
        name: ''
        description:
        brand:
        image:
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};

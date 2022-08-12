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
        name: "Notebook Acer Aspire 5 Intel Core i5-10210U, 8GB RAM, SSD 256GB, 15.6 Full HD"
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

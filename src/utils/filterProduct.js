const { Op } = require("sequelize");
const { limiterText } = require("../utils/stringHelper");
const price = require("../utils/priceHelper");

const filters = {
  smartphones: async (req, res, model) => {
    let brands;
    let value;
    let order;

    const { brand1, brand2, brand3, brand4 } = req.body;
    const { value1, value2, value3, value4 } = req.body;
    const { priceUp, priceDown } = req.body;

    if (brand1) {
      brands = "Samsung";
    }
    if (brand2) {
      brands = "Asus";
    }
    if (brand3) {
      brands = "Apple";
    }
    if (brand4) {
      brands = "Philco";
    }
    if (priceUp) {
      order = "DESC";
    }
    if (priceDown) {
      order = "ASC";
    }
    if (value1) {
      value = 600;
    }
    if (value2) {
      value = 1000;
    }
    if (value3) {
      value = 1500;
    }
    if (value4) {
      value = 2000;
    }

    let smartphones;

    if (brands) {
      smartphones = await model.findAll({
        where: {
          [Op.and]: [{ category: "Smartphone" }, { brand: brands }],
        },
        if(order) {
          order: [["price_discount", order]];
        },
      });
    }

    if (priceDown || priceUp && !brands) {
      smartphones = await model.findAll({
        where: {
          category: "Smartphone",
        },
        order: [["price_discount", order]],
      });
    }

    if (value) {
      smartphones = await model.findAll({
        where: {
          category: "Smartphone",
          price_discount: { [Op.lt]: value },
        },
        if(order) {
          order: [["price_discount", order]];
        },
      });
    }
    if (brands && value) {
      smartphones = await model.findAll({
        where: {
          category: "Smartphone",
          brand: brands,
          price_discount: { [Op.lt]: value },
        },
        if(order) {
          order: [["price_discount", order]];
        },
      });
    }

    return res.render("smartphones", { smartphones, limiterText, price });
  },
};

module.exports = filters;

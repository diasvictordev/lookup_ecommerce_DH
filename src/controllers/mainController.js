const { Product } = require("../database/models");
const { Op } = require("sequelize");

const mainController = {
  index: (req, res) => {
    Product.findAll({
      where: {
        [Op.or]: [
          {
            category: "Notebook",
          },
          { category: "Smartphone" },
        ],
      },
    })
      .then((products) => {
        const productsResume = []
        products.map((product) => {
          productsResume.push(product._previousDataValues)
        });

        const productAvailable = []
        
        productsResume.map(available=>{if(available.amount > 0){ productAvailable.push(available) }})

        res.render("index",{productAvailable})
      })
      .catch((erro) => {
        console.log(erro);
      });
  },

  carrinho: (req, res) => {
    res.render("cart");
  },
  detail: (req, res) => {
    res.render("detail-product");
  },
};

module.exports = mainController;

const { Product } = require("../database/models");
const { Op } = require("sequelize");

const mainController = {
  index: (req, res) => {
    Product.findAll({
      where: {
        [Op.or]: [
          {
            state: "Em oferta",
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

        const offer = []
        const smartphone = []
        
        productsResume.map(product1=>{if(product1.state == "Em oferta"){ offer.push(product1) }})
        productsResume.map(product2=>{if(product2.category == "Smartphone"){ smartphone.push(product2) }})

        return res.render("index",{offer, smartphone})
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

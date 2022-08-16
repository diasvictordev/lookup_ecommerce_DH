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
  detailProduct: (req, res) => {

    const {id} = req.params

    Product.findByPk(id)

    .then(product=>{
      const productInfo = product._previousDataValues
      return res.render("detail-product",{productInfo})
    })
    .catch((erro) => {
      console.log(erro);
    });
},

  }

module.exports = mainController;

const { Product } = require("../database/models");
const { Op } = require("sequelize");
const randomNumber = require("../utils/randomNumber");
const formatPrice = require("../utils/formatPrice");

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
        const productsResume = [];
        products.map((product) => {
          productsResume.push(product._previousDataValues);
        });

        const offer = [];
        const smartphone = [];

        productsResume.map((product1) => {
          if (product1.state == "Em oferta") {
            offer.push(product1);
          }
        });
        productsResume.map((product2) => {
          if (product2.category == "Smartphone") {
            smartphone.push(product2);
          }
        });

        return res.render("index", { offer, smartphone, formatPrice});
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
    const { id } = req.params;
    const randomNumberResult = randomNumber(0, 4);
    const categoryArray = ["Smartphone", "Tablet", "Tv", "Periféricos", "Notebook"]
    const category = categoryArray[randomNumberResult]

    Product.findAll({
      where: {
        [Op.or]: [{ product_id: id }, { category: category }],
      },
    })

      .then((product) => {
        const allProducts = [];
        let productPk = null;
        let productsToShow = null;

        product.map((productMap) => {
          allProducts.push(productMap._previousDataValues);
        });
        productPk = allProducts.find((product) => product.product_id == id);
        productsToShow = allProducts.filter(
          (product) => product.product_id != id
        );
        
        res.render("detail-product", { productPk, productsToShow });
      })
      .catch((erro) => {
        console.log(erro);
      });
  },
};

module.exports = mainController;

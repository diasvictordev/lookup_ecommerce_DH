const { Product } = require("../database/models");
const { Op } = require("sequelize");
const randomNumber = require("../utils/randomNumber");
const {limiterText} = require('../utils/stringHelper');
const price = require('../utils/priceHelper');
const splitDescription = require('../utils/splitDescription');

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


        return res.render("index", { offer, smartphone, limiterText, price});
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

        product.map((productMap) => {
          allProducts.push(productMap._previousDataValues);
        });
        productPk = allProducts.find((product) => product.product_id == id);
        productsToShow = allProducts.filter(
          (product) => product.product_id != id
        );
        
        res.render("detail-product", { productPk, productsToShow, limiterText, splitDescription, price});
      })
      .catch((erro) => {
        console.log(erro);
      });
  },

  // findAll passando a categoria do produto que está na variavel productToshow
  // where e um like pegando as informações atraves do name que está no productToShow
  // renderiza essa view novamente passando as informações filtradas por TV

  // const todasTvs = await Products.findAll({
  //   where: {
  //     [Op.like]: `%${productsToShow.category}%`
  //   }
  // })

  // res.render('detail-product', todasTvs)
};

module.exports = mainController;

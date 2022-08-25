const { Product } = require("../database/models");
const { Op } = require("sequelize");
const { limiterText } = require("../utils/stringHelper");
const price = require("../utils/priceHelper");
const filters = require('../utils/filterProduct')

const menuControllerTwo = {
  allProducts: async (req, res) => {
   
    const countPages = await Product.count()
    let limit = Math.round(countPages / 12)
    let pageCalc = countPages - (limit*2)
const{page} = req.query

console.log(page)

let allProducts
  if(page>limit){
    return res.redirect("/menu/todos-produtos")
  }
   else if(page){ allProducts = await Product.findAll({
      offset: page * 12,
      limit: 12
      }
    )}else{
      allProducts = await Product.findAll({
        limit:12
      })
    }

    const products = []
    allProducts.map((product) => {
      products.push(product._previousDataValues);
    });
  
    res.render("allProducts", { products, limiterText, price, limit });
  },
  
  allProductsFilter: (req, res)=>{

    filters.smartphones(req, res, Product);
   
  },

  notebooks: (req, res) => {
    Product.findAll({
      where: {
        category: "Notebook",
      },
    })
      .then((products) => {
        const notebooks = [];
        products.map((product) => {
          notebooks.push(product._previousDataValues);
        });
        res.render("notebooks", { notebooks, price, limiterText });
      })
      .catch((error) => {
        console.log(error);
      });
  },


  gamer: (req, res) => {
    Product.findAll({
      where: {
        name: {
          [Op.like]: "%gamer%",
        },
      },
    })
      .then((products) => {
        const gamers = [];

        products.map((product) => {
          gamers.push(product._previousDataValues);
        });
        res.render("gamer", { gamers, price, limiterText });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

module.exports = menuControllerTwo;

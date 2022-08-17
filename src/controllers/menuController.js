const { Product } = require("../database/models");
const { Op } = require("sequelize");

const menuController = {
    smartphones: (req, res)=>{
        Product.findAll({
            where: {
                category: "Smartphone" 
            },
          })
          .then((products) => {
            const smartphones = []
            products.map((product) => {
              smartphones.push(product._previousDataValues)
            });
            res.render("smartphones",{smartphones})
    })
        .catch(error=>{console.log(error)})
  },

    perifericos: (req, res)=>{
      Product.findAll({
        where: {
            category: "Periféricos" 
        },
      })
      .then((products) => {
        const perifericos = []
        products.map((product) => {
          perifericos.push(product._previousDataValues)
        });
        res.render("perifericos",{perifericos})
})
    .catch(error=>{console.log(error)})
    },

    cadeiras: (req, res)=>{
        res.render('cadeiras')
    },
    hardware: (req, res)=>{
        res.render('hardware')
    },
    tablet: (req, res)=>{
      Product.findAll({
        where: {
            category: "Tablet" 
        },
      })
      .then((products) => {
        const tablet = []
        products.map((product) => {
          tablet.push(product._previousDataValues)
        });
        res.render("tablet",{tablet})
})
    .catch(error=>{console.log(error)})
    },
    tv: (req, res)=>{
      
      Product.findAll({
        where: {
            category: "TV" 
        },
      })
      .then((products) => {
        const tv = []
        products.map((product) => {
          tv.push(product._previousDataValues)
        });
        res.render("tv",{tv})
})
    .catch(error=>{console.log(error)})

}
}

module.exports = menuController
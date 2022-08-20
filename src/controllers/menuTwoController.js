const { Product } = require("../database/models");
const { Op } = require("sequelize");
const {limiterText} = require('../utils/stringHelper');
const price = require('../utils/priceHelper');

const menuControllerTwo = {
    notebooks: (req, res)=>{
        Product.findAll({
            where: {
                category: "Notebook" 
            },
          })
          .then((products) => {
            const notebooks = []
            products.map((product) => {
              notebooks.push(product._previousDataValues)
            });
            res.render("notebooks",{notebooks, price, limiterText})
    })
        .catch(error=>{console.log(error)})
  },
  
  gamer: (req, res)=>{
    Product.findAll({
    
    where:{
      name: {
        [Op.like]: "%gamer%"
      }
    }
        
      })
      .then((products) => {
      const gamers = []

      products.map((product)=>{ gamers.push(product._previousDataValues) })
      res.render("gamer", {gamers, price, limiterText})
})
    .catch(error=>{console.log(error)})
}

}

module.exports = menuControllerTwo
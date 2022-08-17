const { Product } = require("../database/models");

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
            res.render("notebooks",{notebooks})
    })
        .catch(error=>{console.log(error)})
  }

}

module.exports = menuControllerTwo
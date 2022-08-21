const {Cart} = require ('../database/models');
const {Product} = require ('../database/models')
const { v4: uuidv4 } = require('uuid');
const addToCart = require('../utils/addToCart');
const {User} = require('../database/models')

const cartController = {

    add: (req,res) => {
       res.render('cart')
       Cart.create({cart_id: uuidv4})
       const user_id = await User.findOne({ id })
       const product_id = await Product.findOne({ product_id })
      
      
    

    .then(add => {
        console.log(user_id);
        console.log(product_id);
    })
    .catch(error => {res.send(error)})


}

}

module.exports = cartController;
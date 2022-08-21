const carrinho = []
const {cartController} = require('../controllers/cartController')


click.addEventListener('click', function addToCart (event) {
    event.preventDefault();
    const {cart_id, product_id, user_id} = cartController;
    carrinho.push(cart_id , product_id, user_id)
    
})


module.exports = addToCart;
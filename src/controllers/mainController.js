const mainController = {
    index: (req,res) => {
        res.render('index');
    },  

    carrinho: (req,res) => {
        res.render('cart');
    },

}



module.exports = mainController;
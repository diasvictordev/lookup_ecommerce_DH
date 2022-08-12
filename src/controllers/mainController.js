const mainController = {
    index: (req,res) => {
        res.render('index');
    },  

    carrinho: (req,res) => {
        res.render('cart');
    },
    detail: (req, res)=>{
        res.render('detail-product')
    }

}



module.exports = mainController;
const productController = {
    iniciante: (req,res) => {
        res.render('iniciante');
    },
    ultra: (req,res) => {
        res.render('ultra');  
    },
    ultimate: (req,res) => {
        res.render('ultimate');
    },
    intelProducts: (req,res) => {
        res.render('intel');
    },
    ryzenProducts: (req,res) => {
        res.render('ryzen');
    }
}



module.exports = productController;
const { validationResult } = require('express-validator');

const userController = {

    cadastro: (req,res) => {
        res.render('cadastro');
    },

    processoCadastro: (req, res) => {
        const { name, lastName, select, cpf, rg, email, password } = req.body
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.render('cadastro', {
                errors: errors.mapped()
            })
        }
        
        console.log(req.body);
    },

    login: (req,res) => {
        res.render('login');
    },

    processoLogin: (req,res) => {
        const { email, password } = req.body;

        console.log(req.body);
    }

}



module.exports = userController;
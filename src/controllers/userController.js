const { User } = require("../database/models");
const bcrypt = require('bcrypt');

const userController = {

    cadastro: (req,res) => {
        res.render('cadastro');
    },

    processoCadastro: (req, res) => {
        const { name, surName, cpf, tel, email, date, password } = req.body
        const password_hash = bcrypt.hashSync(password, 10);

        User.create({id, user_name: name, last_name: surName, cpf, tel, email, date_birthday: date, user_password: password_hash})

        .then(user => {
            res.redirect("/usuario/login")
        })
        .catch(error => {res.send(error)})
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
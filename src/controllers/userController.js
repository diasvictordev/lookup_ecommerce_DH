const { User } = require("../database/models");
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const userController = {

    cadastro: (req,res) => {
        res.render('cadastro');
    },

    processoCadastro: (req, res) => {
        const { name, surName, cpf, tel, email, date, password } = req.body
        const password_hash = bcrypt.hashSync(password, 10);

        User.create({id: uuidv4(), user_name: name, last_name: surName, cpf, tel, email, date_birthday: date, user_password: password_hash})

        .then(user => {
            res.redirect("/usuario/login")
        })
        .catch(error => {res.send(error)})
    },

    login: (req,res) => {
        res.render('login');
    },

    processoLogin: async (req,res) => {
        const { email, password, logado } = req.body;
        const userExists = await User.findOne({ email })

        if(logado != undefined){
            
            res.cookie('usuarioLogado', userExists.email, {maxAge:60000})
        }

        req.session.user = userExists.User;
        console.log(req.session.user)

        if (bcrypt.compareSync(password, userExists.user_password)) {
            
            return res.redirect("/");
        }

        return res.render('login', { erro: 'Usuario ou senha incorretos.' })

        
    },

    PainelDeUsuario: (req, res) => {
        
        if(req.session.user){
            res.render('user');
        }
    }

}



module.exports = userController;
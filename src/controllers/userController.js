const { User } = require("../database/models");
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const userController = {

    cadastro: (req,res) => {
        res.render('cadastro', {user: req.session.user});
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
        const userExists = await User.findOne({ where: { email }})        

        if(!userExists){
            
            return res.render('login', {error: "Usuário ou senha incorreto"});
        }
        
        const user = {
            id: userExists.id,
            email: userExists.email,
            nome: userExists.user_name,
        };
       
        req.session.user = user;

        if(logado != "undefined"){

            res.cookie("logado", user, {maxAge: 90000})
        }

        return res.redirect("/");
    },
    
    painelDeUsuario: function(req, res){

        res.render('user', {user: req.session.user})
    }

}



module.exports = userController;
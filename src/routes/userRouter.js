const express = require('express');
const router = express.Router();

// Controllers

const userController = require('../controllers/userController');

// Middlewares

const upload = require('../middlewares/multerMiddleware');
const auth = require('../middlewares/loginMiddleware');

// Formulario de Registro 

router.get('/cadastro', userController.cadastro);

// Processo de Registro 

router.post('/cadastro', userController.processoCadastro);

// Formulario de Login 

router.get('/login', userController.login);

// Processo de Login 

router.post('/login', userController.processoLogin);

// Painel do Usuario 

router.get('/user', userController.painelDeUsuario);



module.exports = router;
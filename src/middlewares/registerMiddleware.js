const { body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty().withMessage('Por favor, preencha o nome!').bail()
        .trim(),
    body('lastName')
        .notEmpty().withMessage('Por favor, preencha o sobrenome!').bail()
        .trim(),
    body('cpf')
        .notEmpty().withMessage('Por favor, preencha o CPF!').bail()
        .isLength({min: 11, max: 11}).withMessage('Insira um CPF válido!').bail(),
    body('rg')
        .notEmpty().withMessage('Por favor, preencha o RG!').bail()
        .isLength({min: 10, max: 10}).withMessage('Insira um RG válido!').bail(),
    body('email')
        .notEmpty().withMessage('Por favor, preencha o email!').bail()
        .normalizeEmail({gmail_remove_dots: false}).bail()
        .isEmail().withMessage('Insira um Email válido'),
    body('password')
        .notEmpty().withMessage('Por favor, preencha a senha!').bail()
        .isLength({min: 6}).withMessage('para sua segurança, insira uma senha mais forte!').bail()
        .trim(),
    body('checkbox')
        .notEmpty().withMessage('Você precisa aceitar os termos para prosseguir com o cadastro')
]



    

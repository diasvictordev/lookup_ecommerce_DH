const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required().message({
        "string.empty": "Preencha este campo"
    }),
    surName: Joi.string().required().message({
        "string.empty": "Preencha este campo"
    }),
    cpf: Joi.string().required().message({
        "string.empty": "Preencha este campo"
    }),
    tel: Joi.string().required().message({
        "string.empty": "Preencha este campo"
    }),
    date: Joi.string().required().message({
        "string.empty": "Preencha este campo"
    }),
    email: Joi.string().required().message({
        "string.empty": "Preencha este campo"
    }),
    password: Joi.string().required().message({
        "string.empty": "Preencha este campo"   
    }),
    passwordConfirme: Joi.any().valid(Joi.ref('password')).required().messages({
        "any.only" : "as senhas não coincidem"
    })
})

module.exports = schema;
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const auth = require('../middlewares/loginMiddleware')

router.get('/', mainController.index);

router.get('/carrinho',auth, mainController.carrinho);

router.post('/carrinho/:id',auth, mainController.cartCreate);

router.post('/remover-produto/:id',auth, mainController.removeItem);

router.get('/detalhe', mainController.detail);

router.get('/detalhe/:id', mainController.detailProduct);

router.get('/meu-endereco', auth, mainController.myAddress);

router.post('/meu-endereco',auth, mainController.newAddress);

router.get('/endereco/resumo',auth, mainController.addressResume);

// router.post('/endereco/resumo', mainController.addressResumeNext);


module.exports = router;
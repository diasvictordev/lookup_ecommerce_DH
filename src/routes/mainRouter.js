const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const cartAuth = require('../middlewares/cartAuth')

router.get('/', mainController.index);

router.get('/carrinho',cartAuth, mainController.carrinho);

router.post('/carrinho/:id',cartAuth, mainController.cartCreate);

router.get('/detalhe', mainController.detail);

router.get('/detalhe/:id', mainController.detailProduct);


module.exports = router;
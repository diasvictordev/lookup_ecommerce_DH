const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/carrinho', mainController.carrinho);

router.get('/detalhe', mainController.detail);


module.exports = router;
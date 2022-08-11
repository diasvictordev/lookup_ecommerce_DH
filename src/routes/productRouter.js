const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

productRouter.get('/iniciante', productController.iniciante);
productRouter.get('/ultra', productController.ultra);
productRouter.get('/ultimate', productController.ultimate);
productRouter.get('/intel-products', productController.intelProducts);
productRouter.get('/ryzen-products', productController.ryzenProducts);


module.exports = productRouter;
const express = require('express');
const menuTwoRouter = express.Router();
const menuTwoController = require('../controllers/menuTwoController');

menuTwoRouter.get('/menu/todos-produtos', menuTwoController.allProducts);

menuTwoRouter.post('/menu/smartphones', menuTwoController.allProductsFilter);

menuTwoRouter.get('/menu/notebooks', menuTwoController.notebooks);

menuTwoRouter.get('/menu/gamer', menuTwoController.gamer);


module.exports = menuTwoRouter;
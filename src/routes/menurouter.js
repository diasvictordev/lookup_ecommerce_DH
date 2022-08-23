const express = require('express');
const menuRouter = express.Router();
const menuController = require('../controllers/menuController');

menuRouter.get('/menu/smartphones', menuController.smartphones);
menuRouter.post('/menu/smartphones', menuController.smartphonesFilter);

menuRouter.get('/menu/perifericos', menuController.perifericos);
menuRouter.get('/menu/cadeiras', menuController.cadeiras);
menuRouter.get('/menu/hardware', menuController.hardware);
menuRouter.get('/menu/tablet', menuController.tablet);
menuRouter.get('/menu/tv', menuController.tv);


module.exports = menuRouter;
const express = require('express');
const menuRouter = express.Router();
const menuController = require('../controllers/menuController');

menuRouter.get('/menu/smartphones', menuController.smartphones);


module.exports = menuRouter;
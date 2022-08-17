const express = require('express');
const menuTwoRouter = express.Router();
const menuTwoController = require('../controllers/menuTwoController');

menuTwoRouter.get('/menu/notebooks', menuTwoController.notebooks);


module.exports = menuTwoRouter;
const express = require('express');
const router = express.Router();

// Controllers

const cartController = require('../controllers/cartController');

// Rota success

router.post('/success', cartController.success);

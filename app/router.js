const express = require('express');

const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/products', mainController.allProducts);
router.get('/brand/:id', mainController.selectByBrand);
router.get('/signup', userController.signUpPage);
router.get('/login', userController.loginPage);
router.post('/login', userController.loginAction);




module.exports = router;
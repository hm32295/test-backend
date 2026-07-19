const addCartController = require('../controller/cart/addCart.controller');
const getCartController = require('../controller/cart/getCart.controller');
const isLogin = require('../middleware/isLogin');

const cartRouter = require('express').Router();

cartRouter.get('/' ,isLogin, getCartController)
cartRouter.post('/' ,isLogin, addCartController)
module.exports = cartRouter
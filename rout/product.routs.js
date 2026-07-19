const express = require('express');
const addProductController = require('../controller/products/addProduct.controller');
const upload = require('../middleware/multer');
const getAllProductController = require('../controller/products/getAllProduct.controller');
const auth = require('../middleware/auth');
const productRouter = express.Router();

productRouter.post('/' ,auth,upload.single('images') , addProductController);
productRouter.get('/' , getAllProductController);

module.exports = productRouter
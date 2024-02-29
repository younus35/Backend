const express = require('express');

const router = express.Router();

const productController = require('../controllers/products');
//in app.js file if we use app.use('/admin',adminRoutes) we implicitly define path as /admin/add-product
router.get('/add-product',productController.getAddProduct);

router.post('/add-product',productController.postAddProduct);
//NOTE:- we are using same routes name in get and post because they are used for get and post 
//we cant use same routes names when we use router.use()

module.exports = router;
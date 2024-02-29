const express =require('express');

const router = express.Router();

const productController = require('../controllers/feedback');

router.get('/contact',productController.getContactUs);

router.post('/success',productController.postContactUs);

router.get('/success',productController.onSuccess);

module.exports = router;
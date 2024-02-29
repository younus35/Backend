const express = require('express');

const router = express.Router();

const path = require('path')

//in app.js file if we use app.use('/admin',adminRoutes) we implicitly define path as /admin/add-product
router.get('/add-product',(req,res,next)=>{
     res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    // res.redirect('/shop');
    res.redirect('/');
})
//NOTE:- we are using same routes name in get and post because they are used for get and post 
//we cant use same routes names when we use router.use()

module.exports = router;
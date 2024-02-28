const express = require('express');

const router = express.Router();

//in app.js file if we use app.use('/admin',adminRoutes) we implicitly define path as /admin/add-product
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" placeholder="size in cm" name="size"><button type="submit">Add Product</button></form>');
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
})
//NOTE:- we are using same routes name in get and post because they are used for get and post 
//we cant use same routes names when we use router.use()

module.exports = router;
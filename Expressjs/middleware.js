const express = require('express');

const bodyParser = require('body-parser')

const app = express();

//body parsing middleware should be done before adding any routes
app.use(bodyParser.urlencoded({extended: false}));

// app.use('/add-product',(req, res, next)=>{ 
//     console.log('in the another middleware');
//     res.send('<h1> The add product page</h1>');//most of the cases when we write res we dont wanna execute next()
// });

app.use('/add-product',(req, res, next)=>{ 
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" placeholder="size in cm" name="size"><button type="submit">Add Product</button></form>');
});

app.use('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});//this will also execute for incoming GET request so we will solve this in middleware1.js

app.use('/',(req, res, next)=>{ 
    console.log('in the another middleware');
    res.send('<h1> hello from Express</h1>');//like res.write
});

app.listen(3000);


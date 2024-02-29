const express =require('express');

const router = express.Router();

const path = require('path');

router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.post('/success',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
})

router.get('/success',(req,res,next)=>{
    res.send('<h1>Form Successfully Filled</h1>');
})

module.exports = router;
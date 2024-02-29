const express = require('express');

const router = express.Router();

const path = require('path')

// const rootDir = require('../util/path'); optional

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
    //optional: path.join(rootDir, "views", "shop.html");
});

module.exports = router;
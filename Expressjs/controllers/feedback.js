const path = require('path');

exports.getContactUs = (req,res,next)=>{
    res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
}

exports.postContactUs = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
}

exports.onSuccess = (req,res,next)=>{
    res.send('<h1>Form Successfully Filled</h1>');
}
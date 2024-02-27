const express = require('express');

const app = express();

app.use((req, res, next)=>{
        console.log('in the middleware');
        next();//moves to next middleware
});

app.use((req, res, next)=>{
    console.log('in the another middleware');
    res.send('<h1> hello from Express</h1>');//like res.write
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);


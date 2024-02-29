const express = require('express');

const app = express();

const bodyParser = require('body-parser');

//routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const feedbackRoutes = require('./routes/feedback');

//controllers
const errorController = require('./controllers/error');

const path = require('path')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public'))); // to use css file statically giving access to read only

// app.use('/admin',adminRoutes);
// app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use(feedbackRoutes);

app.use(errorController.error404);

app.listen(3000);


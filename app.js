const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expresshandle = require('express-handlebars');
const app = express();
const port =process.env.PORT || 3000;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.engine('handlebars',expresshandle());
app.set('view engine', 'handlebars');
app.set('views','views');



app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE,PUT');
    res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorizatrion');
     next();    
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404',{pagetitle:'page not found'});
});

app.listen(port);

require('dotenv').config();

var path = require('path');
var Express = require("express");
var bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');
var db = require('./models');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const port = process.env.PORT || 3000;




var app = Express();
app.engine('handlebars', exphbs({defaultLayout: 'main', partialsDir: ['views/partials/']}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",Express.static("public"));

// Express Session
app.use(session({
    secret: process.env.NODE_SESSION_SECRET || 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());


// routes goes here

var users = require('./controllers/user-routes');
app.use(users);

var html = require('./controllers/html-routes');
app.use(html);

var socials = require('./controllers/social-routes');
app.use('/api', socials);

var comments = require('./controllers/comment-routes');
app.use('/api', comments);


// catch 404 and forward to error handler
/*app.use(function (req, res, next) 
{
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) 
{
    if(err)
    {
        res.status(err.status || 500);
        res.sendFile(path.join(__dirname, "public/404.html"));
    }    
});*/


db.sequelize.sync().then(function()
{
    app.listen(port, () => console.log(`App listening on port ${port}!`));
});
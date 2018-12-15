require('dotenv').config();

var path = require('path');
var Express = require("express");
var bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');
var db = require('./models');
const port = process.env.PORT || 3000;


var app = Express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/assets",Express.static("public"));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

app.use(function (err, req, res, next) {
    res.status(err.status);
    res.sendFile(path.join(__dirname, "public/404.html"));
});


db.sequelize.sync().then(function()
{
    app.listen(port, () => console.log(`App listening on port ${port}!`));
});
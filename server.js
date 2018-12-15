require('dotenv').config();


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

db.sequelize.sync().then(function()
{
    app.listen(port, () => console.log(`App listening on port ${port}!`));
});
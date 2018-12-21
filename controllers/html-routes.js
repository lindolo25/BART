const Express = require("express");
const db = require("../models");
var router = Express.Router();


router.get('/', function (req, res)
{
    // return the homepage
    res.render('index', {});
});

router.get('/profile', function (req, res)
{
    // get the user information.
    // get user's social links.
    // get user related comments.
    //use ajax request to get comments in the frontend (js)
    //use handlebars (views folder)

    res.render('index', {});
});

router.get('/search', function (req, res)
{
    //search comments table for matcing comments.
    res.render('index', {});
});

module.exports = router;



////////////////****************
//****************************** */
////////////////****************
//****************************** */
////////////////****************
//****************************** */
////////////////****************
//****************************** */

var path = require("path");

module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });
};
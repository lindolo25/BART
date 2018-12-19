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

    res.render('index', {});
});

router.get('/search', function (req, res)
{
    //search comments table for matcing comments.
    res.render('index', {});
});

module.exports = router;
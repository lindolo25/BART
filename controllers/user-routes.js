const Express = require("express");
const db = require("../models");
var router = Express.Router();


router.post('/signup', function (req, res)
{
    // validate post data

    // save information in the database

    res.render('index', {});
});

router.post('/login', function (req, res)
{
    // validate user information

    //implement passport-local session handling

    res.render('index', {});
});

router.post('/logout', function (req, res)
{
    //implement passport-local session logout

    res.render('index', {});
});

module.exports = router;
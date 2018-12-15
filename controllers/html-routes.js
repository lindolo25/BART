const Express = require("express");
const db = require("../models");
var router = Express.Router();


router.get('/', function (req, res) 
{
    res.render('index', {});
});

router.get('/profile', function (req, res) 
{
    res.render('index', {});
});

router.get('/profile/:profile', function (req, res) 
{
    res.render('index', {});
});

router.post('/signup', function (req, res) 
{
    res.render('index', {});
});

router.post('/login', function (req, res) 
{
    res.render('index', {});
});

module.exports = router;
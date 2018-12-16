const Express = require("express");
const db = require("../models");
var router = Express.Router();


router.get('/social/:username', function (req, res)
{
    // query social links base on the username

    // return results using text/json, null if not results are found.

    res.render('index', {});
});

router.post('/social/:username', function (req, res)
{
    // validate posted information
    
    // save new  social link into the database

    res.render('index', {});
});

router.delete('/social/:id', function (req, res)
{
    // delete the social link from the database

    res.render('index', {});
});

module.exports = router;
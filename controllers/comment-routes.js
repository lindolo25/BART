const Express = require("express");
const db = require("../models");
var router = Express.Router();


router.get('/comment/:username', function (req, res)
{
    // query all comments associated to a user profile.
    // this will be a direct query to the database.

    // return results using text/json, null if not results are found.

    res.render('index', {});
});

router.post('/comment', function (req, res)
{
    // validate posted information
    
    // save new comment in the database

    res.render('index', {});
});

module.exports = router;
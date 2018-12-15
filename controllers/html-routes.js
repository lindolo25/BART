const Express = require("express");
const orm = require("../models/orm");
var router = Express.Router();


router.get('/', function (req, res) 
{
});

router.post('/api/burgers', function (req, res) 
{
    if(req.body.newBurger)
    {
        orm.insertOne(req.body.newBurger, function(result)
        {
            result ? res.json(result) : res.json(false);
        });
    }
    else res.json(false);
});

router.put('/api/burgers/:id', function (req, res) 
{
    if(req.params.id && req.body.devoured)
    {
        orm.updateOne(req.params.id, function(result)
        {
            result ? res.json(true) : res.json(false);
        })
    }
    else res.json(false);
});

module.exports = router;
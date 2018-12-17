const Express = require("express");
const db = require("../models");
var router = Express.Router();


router.get('/social/:username', function (req, res)
{
    req.params.username = req.params.username.trim();

    if (req.params.username) 
    {
        var query = { username: req.params.username };
        db.socials.findAll({
            attributes: [
                'social_id',
                'site_id',
                'username',
            ],
            include: [{
                model: db.users,
                attributes: ['user_id'],
                where: query
            }]
        }).then(function(dbPost)
        {
            res.json(dbPost);
        });
    }
    else res.json([]);
});

router.post('/social/:username', function (req, res)
{
    req.params.username = req.params.username.trim();
    req.body.site_id = req.body.site_id.trim();
    req.body.username = req.body.username.trim();

    if (req.params.username && !isNaN(req.body.site_id) && req.body.username)
    {
        db.users.findOne({
            attributes: ['user_id'],
            where: { username: req.params.username }
        }).then(function(dbPost) 
        {
            if(!dbPost) return res.json(false);

            var newSocial = { 
                site_id: parseInt(req.body.site_id),
                user_id: dbPost.user_id,
                username: req.body.username
            }

            db.socials.create(newSocial).then(function(dbPost)
            {
                res.json(dbPost);
            });
        });
    }
    else res.json(false);
});

router.delete('/social/:id', function (req, res)
{
    req.params.id = req.params.id.trim();

    if (!isNaN(req.params.id))
    {
        db.socials.destroy({
            where: {
                social_id: parseInt(req.params.id)
            }
        }).then(function(dbPost) 
        {
            res.json(dbPost);
        });
    }
    else res.json(false);
});

module.exports = router;
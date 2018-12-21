const Express = require("express");
const db = require("../models");
var router = Express.Router();


router.get('/comment/:username', function (req, res)
{
    req.params.username = req.params.username.trim();

    if (req.params.username) 
    {
        db.sequelize.query('SELECT \
            comments.comment_id, \
            comments.site_id, \
            comments.username, \
            comments.comment,\
            comments.rating, \
            comments.created_at, \
            comments.updated_at \
        FROM socials\
            INNER JOIN comments ON socials.username = comments.username \
                AND socials.site_id = comments.site_id\
            INNER JOIN users ON socials.user_id = users.user_id\
            WHERE users.username = :username \
            ORDER BY comments.created_at DESC;',
        { 
            replacements: { username: req.params.username }, 
            type: db.sequelize.QueryTypes.SELECT 
        }).then(function(dbPost)
        {
            res.json(dbPost);
        });
    }
    else res.json([]);
});

router.get('/comment/search/:value/:page?', function (req, res)
{
    var value = req.params.value.trim();
    var resultObject = {};
    var Op = db.sequelize.Op;

    if(value)
    {
        var page = req.params.page === undefined ? 1 : parseInt(req.params.page.trim());
        page = page > 0 ? page : 1;

        db.comments.findAll({
            attributes: ['comment_id', 'site_id', 'username', 'comment', 'rating', 'created_at', 'updated_at'],
            offset: (15 * page) - 15,
            limit: 15,
            where: {
                username: {
                    [Op.like]: '%' + value + '%'
                }
            }
        }).then(function(founded) 
        {
            res.json(founded)
        })
    }
    else
    {
        res.json(false)
    }
});

router.post('/comment', function (req, res)
{
    req.body.site_id = parseInt(req.body.site_id.trim());
    req.body.user_id = parseInt(req.body.user_id.trim());
    req.body.username = req.body.username.trim();
    req.body.comment = req.body.comment.trim();
    req.body.rating = parseInt(req.body.rating.trim());

    var validation = req.body.site_id && req.body.username && req.body.user_id && req.body.rating;
    
    if (validation)
    {
        var newComment = { 
            site_id: req.body.site_id,
            user_id: req.body.user_id,
            username: req.body.username,
            comment: req.body.comment,
            rating: req.body.rating
        }

        db.comments.create(newComment).then(function(dbPost)
        {
            res.json(dbPost);
        });
    }
    else res.json(false);
});

module.exports = router;
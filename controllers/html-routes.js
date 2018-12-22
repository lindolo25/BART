const Express = require("express");
const db = require("../models");
const ensureAuthenticated = require('../config/authenticate');
var router = Express.Router();


router.get('/', function (req, res)
{
    var value = req.param('q') !== undefined ? req.param('q').trim() : null;
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
        }).then(function(comments) 
        {
            db.users.findAll({
                attributes: ['user_id', 'username', 'age', 'rating_avg', 'bio', 'img_link'],
                offset: (15 * page) - 15,
                limit: 15,
                where: {
                    username: {
                        [Op.like]: '%' + value + '%'
                    }
                }
            }).then(function(profiles) 
            {
                if(profiles.length > 0 || comments.length > 0)
                {
                    res.render('search', {
                        message: null,
                        comments: comments,
                        profiles: profiles,
                        user_id: req.user ? req.user.user_id : null
                    })
                }
                else
                {
                    res.render('search', {
                        message: "No results found",
                        comments: [],
                        profiles: [],
                        user_id: req.user ? req.user.user_id : null
                    })
                }

            });
            
        });
    }
    else
    {
        res.render('index', { user_id: req.user ? req.user.user_id : null });
    }
});

router.get('/profile', ensureAuthenticated, function (req, res)
{
    console.log(req.user.user_id);

    // get user's social links.
    db.socials.findAll({
        attributes: [
            'social_id',
            'site_id',
            'username',
        ],
        where: { user_id: req.user.user_id }
    }).then(function(dbPost)
    {
        var profile = {
            username: req.user.username,
            age: req.user.age,
            bio: req.user.bio,
            raiting: req.user.rating_avg,
            img_link: req.user.img_link,
            socials: dbPost
        }
        res.render('profile', profile);
    });

    
});

router.get('/search', function (req, res)
{
    
});

module.exports = router;
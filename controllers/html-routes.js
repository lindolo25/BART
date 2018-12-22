const Express = require("express");
const db = require("../models");
const ensureAuthenticated = require('../config/authenticate');
var router = Express.Router();


router.get('/', function (req, res)
{
    // return the homepage
    res.render('index', { user_id: req.user ? req.user.user_id : null });
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

router.get('/search/:value/:page?', function (req, res)
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
            if(founded.length > 0)
            {
                res.render('search', {
                    message: null,
                    comments: founded
                })
            }
            else
            {
                res.render('search', {
                    message: "nothing found",
                    comments: []
                })
            }
            
        })
    }
    else
    {
        res.render('search', {
            message: "nothing found",
            comments: []
        })
    }
});

module.exports = router;
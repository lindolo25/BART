const Express = require("express");
const db = require("../models");
var router = Express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function(username, password, cb) 
{
    db.users.findOne({
        where: {
            username: username
        }
    }, function(foundUser) 
    {
        if (!foundUser) 
        {
			return cb(null, false);
        }
        else if (foundUser.password == password) 
        {
            return cb(null, user);
        }
        else
        {
            return cb(null, false);
        }
    });
}));

passport.serializeUser(function (user, cb) 
{
	cb(null, user.id);
});

passport.deserializeUser(function (id, cb) 
{
    db.users.findOne({
        where: {
            user_id: id
        }
    }, function (foundUser) 
    {
		cb(foundUser);
	});
});

router.post('/signup', function (req, res)
{
    req.body.username = req.body.username.trim();
    req.body.first_name = req.body.first_name.trim();
    req.body.last_name = req.body.last_name.trim();
    req.body.age = parseInt(req.body.age.trim());
    req.body.gender = typeof req.body.gender === "Boolean" ? req.body.gender : undefined;
    req.body.bio = req.body.bio ? req.body.bio.trim() : null;
    req.body.password = req.body.password.trim();

    var validation = req.body.username && req.body.first_name && req.body.last_name && req.body.age &&  req.body.gender != undefined && req.body.password;
    
    if (validation)
    {
        db.users.findOne({
            attributes: ['user_id'],
            where: { username: req.body.username }
        }).then(function(dbPost) 
        {
            if(dbPost) return res.json({ 
                error: true,
                message: 'Username already exist.'
            });

            var newUser = { 
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                age: req.body.age,
                gender: req.body.gender,
                bio: req.body.bio,
                password: req.body.password
            }
    
            db.users.create(newUser).then(function(dbPost)
            {
                res.json(dbPost);
            });
        });
    }
    else res.json({ 
        error: true,
        message: 'Validation failed.'
    });
});

router.post('/login', passport.authenticate('local'), function (req, res) 
{
    res.json(req.user);
});

router.get('/logout', function (req, res)
{
    req.logout();
    res.redirect('/');
});

module.exports = router;
const Express = require("express");
const db = require("../models");
var router = Express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function(username, password, cb) 
{
    db.users.findOne({
        where: { username: username }
    }).then(function(foundUser) 
    {
        if (!foundUser) 
        {
			return cb(null, false);
        }
        else if (foundUser.password == password)
        {
            return cb(null, foundUser);
        }
        else
        {
            return cb(null, false);
        }
    });
}));

passport.serializeUser(function (user, cb) 
{
	cb(null, user.user_id);
});

passport.deserializeUser(function (id, cb) 
{
    db.users.findOne({
        where: {
            user_id: id
        }
    }).then(function (foundUser) 
    {
		cb(null, foundUser);
	});
});

router.post('/signup', function (req, res)
{
    req.body.username = req.body.username.trim();
    req.body.firstName = req.body.firstName.trim();
    req.body.lastName = req.body.lastName.trim();
    req.body.bio = req.body.bio ? req.body.bio.trim() : null;
    req.body.password = req.body.password.trim();

    var validation = (req.body.username && 
        req.body.firstName && 
        req.body.lastName && 
        req.body.age && 
        req.body.gender != undefined && 
        req.body.password) ? true : false;
    
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
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                age: req.body.age,
                gender: req.body.gender,
                bio: req.body.bio,
                password: req.body.password
            }
    
            db.users.create(newUser).then(function(user)
            {
                req.logIn(user, function(err) 
                {
                    if (err) { return next(err); }
                    return res.json(user);
                });
            });
        });
    }
    else res.json({ 
        error: true,
        message: 'Validation failed.'
    });
});

router.post('/login', function (req, res, next) 
{
    passport.authenticate('local', function(err, user) 
    {
        if (err) { return next(err); }

        if (!user) { return res.json(false); }

        req.logIn(user, function(err) 
        {
            if (err) { return next(err); }
            return res.json(user);
        });
      
    })(req, res, next);
    
    //res.json(req.user);
});

router.get('/logout', function (req, res)
{
    req.logout();
    res.redirect('/');
});

module.exports = router;
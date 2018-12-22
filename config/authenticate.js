module.exports = function ensureAuthenticated(req, res, next)
{
    var a = req.isAuthenticated()
    if(a)
    {
	    return next();
    } 
    else 
    {
        res.redirect('/');
	}
}
module.exports = function (req, res, next){
    // Assuming this function is executed after the 'auth' middleware,
    // there is access to req.user(_id, isAdmin)
    if (!req.user.isAdmin) return res.status(403).send('Access Denied') // 403 is Forbidden
    next();
}
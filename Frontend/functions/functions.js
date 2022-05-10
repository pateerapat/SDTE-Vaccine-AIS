module.exports = {
    ifNotLoggedIn: (req, res, next) => {
        if (!req.session.isLoggedIn) {
            return res.redirect('/login');
        };
        next();
    },
    
    ifLoggedIn: (req, res, next) => {
        if (req.session.isLoggedIn) {
            return res.redirect('/');
        };
        next();
    },
};

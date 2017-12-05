var passport = require('passport');

module.exports = function (app){
    app.use(passport.initialize());
    app.use(passport.session());
    // pull the use unto the session
    passport.serializeUser(function(user, done){
        done(null, user);
    });
    // pulls the user out of the session
    passport.deserializeUser(function(user, done){
        done(null, user);
    });
}

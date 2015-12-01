var express = require('express');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('./keys')

var app = express();

app.use(session({secret: 'Holy cow ship tarp ham eggs flobberworm'}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
    clientID: keys.facebookId,
    clientSecret: keys.facebookSecret,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
    return done(null, profile);
}));


app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/me',
    failureRedirect: '/login'
}), function(req, res) {
    console.log(req.session);
});

passport.serializeUser(function(user, done) {  //function that is called by passport to modify data before it is put on the session
    done(null, user);
});

var requireAuth = function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/auth/facebook')
}

passport.deserializeUser(function(obj, done) {  //function that is called by passport after data is pulled from the session
    done(null, obj);
});

app.get('/me', requireAuth, function(req, res) {
    var currentLoggedInUserOnSession = req.user;
    res.send(currentLoggedInUserOnSession);
});

app.listen('3000', function() {
    console.log('listening on port 3000');
});
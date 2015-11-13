var express = require('express');

var app = express();

var messages = [
    "How dare you.",
    "If my dog was as ugly as you, I'd shave it's butt and teach it to walk backwards.",
    "Has anyone told you that you smell like a hippie?",
    "Why don't you just Google it?",
    "Oh crap, did you lose your glue stick again?",
    "Leave me alone.",
    "Are you drunk?",
    "Doesn't change the way mustard tastes.",
    "I don't know and I don't care!"
]

var getRandomMessage = function () {
    var random = Math.floor(Math.random() * 9);
    return messages[random];
};

app.get('/', function (req, res, next) {
    res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
        message: getRandomMessage()
    }));
});

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});

app.listen(8887, function () {
    console.log('Listening on port 8887')
});
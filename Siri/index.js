var express = require('express');

var app = express();

var messages = [
    "Does a drunk horse care where he pees?",
    "If my dog was as ugly as you, I'd shave it's butt and teach it to walk backwards.",
    "Oh I'm so sorry, please forgive me. Please. Please? Please!",
    "Why don't you just Google it?",
    "Oh crap, did you lose your glue stick again?",
    "I once had that question. Never did find the answer.",
    "Do you kiss your mother with that mouth?",
    "Doesn't change the way mustard tastes.",
    "I wouldn't bet my life on it, but I'd bet everything I own on it."
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
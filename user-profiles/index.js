var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

var app = express();

var corsOptions = {
    origin: 'http://localhost:8999'
};

app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);




app.listen(8999, function() {
    console.log('listening on port 8999');
});
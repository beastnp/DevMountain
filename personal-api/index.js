var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.name);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupations);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);



app.listen(8080, function() {
    console.log('listening to port 8080');
})
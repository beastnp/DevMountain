var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongo = require('mongojs');

var app = express();

var db = mongo("birds");
var sightings = db.collection("sightings");

app.use(bodyParser.json());
app.use(cors());


app.post('/api/sighting', function (req, res, next) {
    sightings.insert(req.body, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/api/sighting', function (req, res, next) {
    sightings.find(req.query, function(err, result) {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
});

app.put('/api/sighting', function (req, res, next) {
    sightings.update({"_id": mongo.ObjectId(req.query.id)}, req.body, function(err, result) {
        
    })
    
});

app.delete('/api/sighting', function (req, res, next) {
    sightings.remove({"_id": mongo.ObjectId(req.query.id)}, function(err, result) {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
});


app.listen(3000, function () {
    console.log('Listening on port 3000');
});
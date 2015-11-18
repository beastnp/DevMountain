var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongo = require('mongojs');

var app = express();

var corsOptions = {
    origin: 'http://localhost:8080'
};

var db = mongo('ecommerce');
var products = db.collection("products");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));


app.get('/api/products', function(req, res, next) {
    products.find(req.query, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/api/products', function(req, res, next) {
    products.insert(req.body, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.put('/api/products', function(req, res, next) {
    products.update({"_id": mongo.ObjectId(req.query.id)}, req.body, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/api/products', function(req, res, next) {
    products.remove({"_id": mongo.ObjectId(req.query.id)}, req.body, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});








app.listen(8080, function() {
    console.log('listening on port 8080');
});
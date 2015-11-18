// Went through and commented out anything mongojs related, as mongoose will replace all of that.

var express = require('express')
,   bodyParser = require('body-parser')
,   cors = require('cors')
,   mongoose = require('mongoose')
,   productCtrl = require('./controllers/productCtrl')
,   port = 8080
,   app = express()
,   mongoUri = 'mongodb://localhost:27017/ecommerce-part-one';

// var mongo = require('mongojs');
// var db = mongo('ecommerce');
// var products = db.collection("products");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));


app.get('/api/products', productCtrl.getProduct);
app.post('/api/products', productCtrl.addProduct);

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

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('Connected to MongoDB at ' + mongoUri);
});
var Product = require('../models/Product');

module.exports = {

    addProduct: function (req, res) {
        new Product(req.body).save(function (err, result) {
            console.log('body ' + req.body);
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(result);
                console.log('result ' + result);
            }
        });
    },

    getProduct: function (req, res) {
        Product.find().then(function (response) {
            res.send(response);
        });
    },

    updateProduct: function (req, res) {
//        console.log('ID', req.params.id);
//        console.log('Product', req.body);
        Product.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(result);
            }
        });
    },

    deleteProduct: function (req, res) {
        Product.findByIdAndRemove(req.params.id, function (err, result) {
            if(err) {
                res.status(500).send(err); 
            } else {
                res.send(result);
            }
        });
    }


};
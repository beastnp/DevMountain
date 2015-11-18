var Product = require('../models/Product');

module.exports = {
    
    addProduct: function(req, res) {
        new Product(req.body).save(function(err, newProduct) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newProduct);
            }
        });
    },

    getProduct: function (req, res) {
        Product.find().then(function (response) {
            res.send(response);
        });
    }



};
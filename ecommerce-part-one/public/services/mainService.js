angular.module('ecommerceApp')

.service('mainService', function ($http) {

    this.getProducts = function () {
        return $http.get('/api/products').then(function (response) {
            return response.data;
        });
    };
    
    this.addNewProduct = function(product) {
        return $http.post('/api/products', product).then(function(response) {
            return response;
        });
    };
    
    this.updateProduct = function(product) {
        var endpoint = '/api/products/' + product._id;
        return $http.put(endpoint, product);
        };

    this.deleteProduct = function (productId) {
        return $http.delete('/api/products/' + productId);
    };
    

});
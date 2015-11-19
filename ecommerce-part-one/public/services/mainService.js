angular.module('ecommerceApp')

.service('mainService', function ($http) {

    this.getProducts = function () {
        return $http.get('/api/products').then(function (response) {
            return response.data;
        });
    };
    
    this.addNewProduct = function(product) {
        $http.post('/api/products', product).then(function(response) {
            return response.data;
        });
    };

    this.deleteProduct = function (productId) {
        $http.delete('/api/products/' + productId).then(function(response) {
            return response.data;
        });
    };
    

});
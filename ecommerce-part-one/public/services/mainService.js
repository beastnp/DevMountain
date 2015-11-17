angular.module('ecommerceApp')

.service('mainService', function($http) {
    
    this.getProducts = function(products) {
        return $http.get('/product');
    }
});
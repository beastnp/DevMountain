angular.module('ecommerceApp')

.service('mainService', function ($http) {

    this.getProducts = function () {
        return $http.get('/api/products')
            .then(function (response) {
                return response.data;
            })
    };
});
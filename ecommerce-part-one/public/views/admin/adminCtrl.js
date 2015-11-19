angular.module('ecommerceApp')

.controller('adminCtrl', function ($scope, mainService, $http) {

    $scope.getProducts = function () {
        mainService.getProducts().then(function (response) {
            $scope.products = response;
        });
    };
    
    $scope.addNewProduct = function(product) {
        $http.post('/api/products', product).then(function(response) {
            $scope.products = response;
        });
    };

    $scope.deleteProduct = function (productId) {
        $http.delete('/api/products/' + productId).then(function (response) {
            $scope.getProducts();
        });
    };

    $scope.getProducts();


});
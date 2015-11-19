angular.module('ecommerceApp')

.controller('homeCtrl', function($scope, mainService) {
    
    $scope.getProducts = function () {
        mainService.getProducts().then(function (response) {
            $scope.products = response;
        })
    };

    $scope.getProducts();
    
});
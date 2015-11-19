angular.module('ecommerceApp')

.controller('adminCtrl', function ($scope, mainService) {

    $scope.getProducts = function () {
        mainService.getProducts().then(function (response) {
            $scope.products = response;
        });
    };
    
    $scope.addNewProduct = function() {
        mainService.addNewProduct($scope.newProduct).then(function(response) {
            $scope.getProducts();
        });
        $scope.newProduct = {};
    };
    
    $scope.updateProduct = function(product) {
        mainService.updateProduct(product).then(function(response) {
            $scope.getProducts();
        });
        $scope.updatedProduct = {};
    };

    $scope.deleteProduct = function (productId) {
        mainService.deleteProduct(productId).then(function (response) {
            $scope.getProducts();
        });
    };

    $scope.getProducts();
    
    $scope.showUpdateForm = function() {
        $scope.showForm = !$scope.showForm;
    }


});
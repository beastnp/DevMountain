angular.module('ecommerceApp')

.controller('adminCtrl', function($scope, productInfo) {
    
    $scope.products = productInfo;
    
});
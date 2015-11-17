angular.module('ecommerceApp')

.controller('homeCtrl', function($scope, productInfo) {
    
    $scope.products = productInfo;
    
});
angular.module('miniRouting').controller('productsCtrl', function($scope, productsService, $stateParams) {
    
    var id = $stateParams.id;
    
    if(id === 'socks') {
        $scope.productData = productsService.sockData;
    } else {
        $scope.productData = productsService.shoeData;
    }
    
});
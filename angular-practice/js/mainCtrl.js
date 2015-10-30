angular.module('myApp').controller('mainCtrl', function($scope, myService) {
    
    $scope.getData = function() {
        myService.goGetEm().then(function(swData) {
            $scope.characterData = swData;
            console.log($scope.characterData);
        })
    };
    
    $scope.getData();

})
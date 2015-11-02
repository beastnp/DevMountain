angular.module('myApp').controller('mainCtrl', function($scope, myService) {
    
    $scope.currentPage = 1;
    $scope.maxPages = 9;
    
    $scope.getData = function() {
        myService.goGetEm().then(function(swData) {
            $scope.characterData = swData;
            console.log($scope.characterData);
        })
    };
    
    $scope.previous = function() {
        $scope.currentPage--;
        $scope.getData($scope.currentPage);
    }
    
    $scope.next = function() {
        $scope.currentPage++;
        $scope.getData($scope.currentPage);
    }
    
    $scope.getData();

})
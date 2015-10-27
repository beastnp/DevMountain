angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {
    
    $scope.getQuotesArr = function() {
        $scope.quotes = dataService.getData();
    }
    
    $scope.getQuotesArr();
    
    $scope.getAddData = function() {
        var obj = {
            text: $scope.textInput,
            author: $scope.textAuthor
        }
        dataService.addData(obj);
    };
    
    $scope.getRemoveData = function(index) {
        dataService.removeData(index);
    };
    
    $scope.getRemoveData2 = function () {
      dataService.removeData2($scope.textInput); 
    }
    
});
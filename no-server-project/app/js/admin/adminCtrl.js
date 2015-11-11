angular.module('noServerApp').controller('adminCtrl', function($scope, firebaseService) {
    
    $scope.emails = firebaseService.emailsArray;
    
    $scope.emails.$loaded().then(function(emails) {
        console.log(email);
    });
    
});
angular.module('noServerApp').controller('contactCtrl', function($scope, firebaseService) {
    
    $scope.sendEmail = function() {
        var emailObj = {
            emailCompose: $scope.emailCompose,
            emailSubject: $scope.emailSubject,
            userEmail: $scope.userEmail,
            username: $scope.username
        };
        firebaseService.pushFirebaseArray(emailObj);
        $scope.username = '';
        $scope.userEmail = '';
        $scope.emailSubject = '';
        $scope.emailCompose = '';
        };
    
});
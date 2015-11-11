angular.module('noServerApp').controller('contactCtrl', function($scope, firebaseService) {
    
    var currentDate = function() {
        var date = new Date();
        return date.toLocaleDateString();
    };
    
    $scope.sendEmail = function() {
        var time = currentDate();
        var emailObj = {
            emailDate: time,
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
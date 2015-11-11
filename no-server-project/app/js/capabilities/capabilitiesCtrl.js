angular.module('noServerApp').controller('capabilitiesCtrl', function($scope, mainService) {
    
    $scope.skills = mainService.skillsArray;
    
});
angular.module('noServerApp').controller('capabilitiesCtrl', function($scope, capabilitiesService) {
    
    $scope.skills = capabilitiesService.skillsArray;
    
});
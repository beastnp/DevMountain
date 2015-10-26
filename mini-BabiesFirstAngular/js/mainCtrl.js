var app = angular.module('friendsList');

app.controller('mainCtrl', function ($scope) {

    $scope.name = "Nick";

    $scope.friends = [
        "Freddy",
        "Jason",
        "Spooky",
        "Scary",
        "Tracy"
    ];

});
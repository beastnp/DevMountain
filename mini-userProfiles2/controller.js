var app = angular.module('userProfiles');

app.controller('MainController', function ($scope, mainService) {

    var currentPage = 1;
    var maxPages = 1;
    var minPages = 1;

    $scope.getUsers = function () {
        mainService.getUsers(currentPage)
            .then(function (response) {
                $scope.users = response.data.data;
                maxPages = response.data.total_pages;
            });
    }

    $scope.getUsers();

    $scope.next = function () {
        if (currentPage < maxPages) {
            currentPage++;
            $scope.getUsers();
        }
    };

    $scope.previous = function () {
        if (maxPages > minPages) {
            currentPage--;
            $scope.getUsers();
        }
    };


});
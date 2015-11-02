var app = angular.module('nbaRoutes');

// this controller needs to be injected the resolved data from the router
app.controller('teamCtrl', function ($scope, $stateParams, teamService, teamData) {

    // controller code
    
    $scope.teamData = teamData;
    
    $scope.newGame = {
        homeTeam: $scope.homeTeam.split(' ').join('').toLowerCase()
    };
    
    $scope.showNewGameForm = false;
    
    $scope.toggleNewGameForm = function() {
        $scope.showNewGameForm = !$scope.showNewGameForm;
    };
    
//    $scope.toggleNewGameForm();
    
    var team = $stateParams.team;
    
    if (team === 'utahjazz') {
        $scope.homeTeam = 'Utah Jazz';
        $scope.logoPath = 'images/jazz-logo.png';
    } else if (team === 'losangeleslakers') {
        $scope.homeTeam = 'Los Angeles Lakers';
        $scope.logoPath = 'images/lakers-logo.png';
    } else if (team === 'miamiheat') {
        $scope.homeTeam = 'Miami Heat';
        $scope.logoPath = 'images/heat-logo.png';
    }
    
    
    $scope.submitGame = function() {
        teamService.addNewGame($scope.newGame).then(function() {
            teamService.getTeamData($scope.newGame.homeTeam).then(function(data) {
                $scope.teamData = data;
                $scope.newGame = {};
                $scope.showNewGameForm = false;
            })
        })
    }
    
    console.log($scope);

});
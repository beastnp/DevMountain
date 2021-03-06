var app = angular.module('nbaRoutes');

app.service('teamService', function ($http, $q) {

    // service code
    
    this.addNewGame = function(gameObj) {
        
        var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
        
        if ((gameObj.homeTeamScore / 1) > (gameObj.opponentScore / 1)) {
            gameObj.won = true;
        } else {
            gameObj.won = false;
        }
        
        return $http({
            method: 'POST',
            url: url,
            data: gameObj
        })
    };
    
    
    this.getTeamData = function(team) {
        
        var deferred = $q.defer();
        var url = 'https://api.parse.com/1/classes/' + team;
        
        $http({
            method: 'GET',
            url: url
        }).then(function(data) {
            var results = data.data.results;
            
            var wins = 0;
            var losses = 0;
            
            for (var key in results) {
                if (results[key].won) {
                    wins +=1;
                } else {
                    losses +=1;
                }
            }
            
            results.wins = wins;
            results.losses = losses;
            
            deferred.resolve(results);
        })
        return deferred.promise;
    };

});
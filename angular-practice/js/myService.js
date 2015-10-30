angular.module('myApp').service('myService', function ($q, $http) {

    var baseUrl = 'http://swapi.co/api/people/'

    this.goGetEm = function() {
        
        var deferred = $q.defer();
        
        $http.get(baseUrl).then(function(response) {
            var parsedResponse = response.data.results;
            deferred.resolve(parsedResponse);
        })
        return deferred.promise;
    };



})
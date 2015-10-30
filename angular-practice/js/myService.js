angular.module('myApp').service('myService', function ($q, $http) {

    var baseUrl = 'http://swapi.co/api/people/?page='

    this.goGetEm = function(pageNum) {
        
        var deferred = $q.defer();
        
        $http.get(baseUrl + pageNum).then(function(response) {
            var parsedResponse = response.data.results;
            deferred.resolve(parsedResponse);
        })
        return deferred.promise;
    };



})
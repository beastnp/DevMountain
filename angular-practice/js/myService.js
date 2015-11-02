angular.module('myApp').service('myService', function ($q, $http) {

    this.goGetEm = function () {

        var deferred = $q.defer();
        var next = "http://swapi.co/api/people";
        var finalResults = [];

        do {
            console.log("getting", next);
            $http.get(next).then(function (response) {
                var parsedResponse = response.data.results;
                finalResults.push(parsedResponse);
                next = response.data.next;
            });
        } while (next !== null);

        deferred.resolve(finalResults);

        return deferred.promise;
    };



})
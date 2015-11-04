angular.module('directivePractice').service('weatherService', function ($http, $q) {

    this.getWeather = function (city) {

        var deferred = $q.defer();

        $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&APPID=42a71c6d5a3a975193a52e850e7c3b23')
            .then(function (response) {
            console.log(response);
//                var parsedResponse = response.data;
//                var obj = {};
//                obj.temperature = parsedResponse.main.temp;
//                obj.weatherDescription = parsedResponse.weather[0].description;
                deferred.resolve(response);
            })
        return deferred.promise;
    }


})
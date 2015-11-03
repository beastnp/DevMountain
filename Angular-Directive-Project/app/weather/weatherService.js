angular.module('directivePractice').service('weatherService', function ($http, $q) {

    this.getWeather = function (city) {

        var deferred = $q.defer();

        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=42a71c6d5a3a975193a52e850e7c3b23')
            .then(function (response) {
                var parsedResponse = response.data;

                var finalArray = [];

                parsedResponse.forEach(function (element) {
                    var obj = {};
                    obj.temperature = element.main.temp;
                    obj.weatherDescription = element.weather.description;
                    finalArray.push(obj);
                })
                deferred.resolve(finalArray);
                console.log(finalArray);
            })
        return deferred.promise;
    }


})
angular.module('directivePractice')

.directive('dirWeather', function() {
    
    return {
        templateUrl: 'app/directives/dirWeather.html',
        scope: {
            currentUser: '=',
            weatherCall:  '&'
        },
        controller: function($scope) {
            var getWeatherInDirective = function() {
            $scope.weatherCall({city: $scope.currentUser.city})
                .then(function(response) {
                    $scope.weatherData = response;
            })
        }
        getWeatherInDirective();
            
            $scope.$watch('currentUser', function(value) {
                $scope.weatherCall();
            })
        }
    }
    
});
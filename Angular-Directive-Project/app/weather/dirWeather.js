angular.module('directivePractice')

.directive('dirWeather', function() {
    
    return {
        templateUrl: 'app/weather/dirWeather.html',
        scope: {
            currentUser: '='
        }
    }
    
});
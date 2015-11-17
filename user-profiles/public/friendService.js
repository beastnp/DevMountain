angular.module('userProfiles')
    .service('friendService', function ($http) {


        this.login = function (user) {
            /* FIX ME */
            return $http.post('/api/login', user)
                .then(function (data) {
                    return data;
                })
        }
    });
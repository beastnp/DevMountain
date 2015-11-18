angular.module('ecommerceApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home/homeTmpl.html',
            controller: 'homeCtrl',
            resolve: {
                productInfo: function (mainService) {
                    return mainService.getProducts();
                }
            }
        })
        .state('admin', {
            url: '/admin',
            templateUrl: './views/admin/adminTmpl.html',
            controller: 'adminCtrl',
            resolve: {
                productInfo: function ($http) {
                    return $http.get('api/products')
                        .then(function (response) {
                            return response.data;
                        })
                }
            }
        });

    $urlRouterProvider.otherwise('/');


});
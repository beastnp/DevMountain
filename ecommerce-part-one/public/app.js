angular.module('ecommerceApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
                url: '/'
            ,   templateUrl: './views/home/homeTmpl.html'
            ,   controller: 'homeCtrl'
        })
        .state('admin', {
                url: '/admin'
            ,   templateUrl: './views/admin/adminTmpl.html'
            ,   controller: 'adminCtrl'
        });

    $urlRouterProvider.otherwise('/');


});
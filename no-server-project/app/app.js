angular.module('noServerApp', ['ui.router', 'firebase'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'app/js/portfolio/portfolioTmpl.html',
            controller: 'portfolioCtrl'
        }) 
        .state('capabilities', {
            url: '/capabilities',
            templateUrl: 'app/js/capabilities/capabilitiesTmpl.html',
            controller: 'capabilitiesCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/js/contact/contactTmpl.html',
            controller: 'contactCtrl'
        });
    
    $urlRouterProvider
        .otherwise('/home');


});
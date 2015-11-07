angular.module('noServerApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('skills', {
            url: '/skills',
            templateUrl: 'app/js/skills/skillsTmpl.html',
            controller: 'skillsCtrl'
        }) 
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'app/js/portfolio/portfolioTmpl.html',
            controller: 'portfolioCtrl'
        }) 
        .state('about', {
            url: '/about',
            templateUrl: 'app/js/about/aboutTmpl.html',
            controller: 'aboutCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/js/contact/contactTmpl.html',
            controller: 'contactCtrl'
        });
    
    $urlRouterProvider
        .otherwise('/home');


});
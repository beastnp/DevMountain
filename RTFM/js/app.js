angular.module('rtfmApp', ['ui-router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('threads', {
        url: '/threads/:threadId'
    })
    
    $urlRouterProvider
        .otherwise('/threads')
    
})
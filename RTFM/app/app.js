var app = angular.module('rtfmApp', ['ui.router', 'firebase']);

app.constant('fb', {
    url: 'https://nick-rtfm-project.firebaseio.com/'
});

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/threads',
            templateUrl: './app/threads/threads.html',
            controller: 'threadsCtrl',
            resolve: {
                threadsRef: function (threadsService) {
                    return threadsService.getThreads();
                }
            }
        })
        .state('thread', {
            url: '/threads/:threadId',
            templateUrl: 'app/thread/thread.html',
            controller: 'threadCtrl',
            resolve: {
                threadRef: function (threadsService, $stateParams) {
                    return threadsService.getThread($stateParams.threadId);
                },
                commentsRef: function(threadsService, $stateParams) {
                    return threadsService.getComments($stateParams.threadId);
                }
            }
        });

    $urlRouterProvider
        .otherwise('/threads');

});
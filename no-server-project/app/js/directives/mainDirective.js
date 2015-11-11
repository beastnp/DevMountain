angular.module('noServerApp')

.directive('mainDirective', function () {

    return {
        restrict: 'E',
        template: '<div class="nav-top"><img src="nicks-logo2.png" height="75" width="125"></img><ul><li><a href="/#/home">Home</a></li><li><a href="/#/portfolio">Portfolio</a></li><li><a href="/#/capabilities">Capabilities</a></li><li><a href="/#/contact">Contact</a></li></ul></div>'
    };

});
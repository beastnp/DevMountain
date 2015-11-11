angular.module('noServerApp')

.directive('footerDirective', function() {

    return {
        restrict: 'E',
        template: '<div class="nav-bottom"><ul><li><a href="https://www.linkedin.com/in/npeterson1"><img src="http://cdn.marketingboard.biz/wp-content/uploads/2014/08/LinkedIn-Badge.png"></a></li><li><a href="https://github.com/beastnp"><img src="http://cdn.flaticon.com/png/256/25231.png"></a></li><li><a href="mailto:peterson.nick2@gmail.com"><img src="http://www.appzthatrock.com/wp-content/uploads/2015/06/mail-icon.png"</a></li></ul></div>'
    };
});
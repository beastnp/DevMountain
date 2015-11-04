angular.module('directivePractice')

.directive('dirDisplay', function() {
    
    return {
        scope: {
          user: "=userInfo",
            setUser: "&"
        },
        templateUrl: 'app/directives/dirDisplayTmpl.html',
        link: function(scope, element, attributes) {
            scope.flag = true;
            element.on('click', function() {
                scope.setUser(scope.user);
                scope.flag = !scope.flag;
                scope.$apply();
            })
        }
    };
    
});
angular.module('directivePractice')

.directive('dirDisplay', function() {
    
    return {
        templateUrl: 'app/dirDisplayTmpl.html',
        link: function(scope, element, attributes) {
            scope.flag = true;
            element.on('click', function() {
                scope.flag = !scope.flag;
                scope.$apply();
            })
        }
    };
    
});
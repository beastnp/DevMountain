angular.module('ecommerceApp')

.directive('mainDirective', function() {
    
   return {
       restrict: 'E',
       template: '<div class="productList">Name: {{ product.title }}<br>Department: {{ product.description }}<br> Price: {{ product.price }}<br></div>'
   }; 
    
    
});
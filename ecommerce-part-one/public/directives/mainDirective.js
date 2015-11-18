angular.module('ecommerceApp')

.directive('mainDirective', function() {
    
   return {
       restrict: 'E',
       template: '<div class="productList">Name: {{ product.name }}<br>Type: {{ product.classification }}<br> Price: {{ product.price }}<br></div>'
   }; 
    
    
});
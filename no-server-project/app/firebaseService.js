angular.module('noServerApp').service('firebaseService', function($firebaseArray) {
    
    var ref = new Firebase('https://np-personal-site.firebaseio.com/');
    
    var emailsArray = $firebaseArray(ref);
    
    this.pushFirebaseArray = function(email) {
        emailsArray.$add(email);
    }
    
    
    
})
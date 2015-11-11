angular.module('noServerApp').service('firebaseService', function($firebaseArray, $firebaseAuth) {
    
    var ref = new Firebase('https://np-personal-site.firebaseio.com/');
    
    this.emailsArray = $firebaseArray(ref);
    
    this.pushFirebaseArray = function(email) {
        this.emailsArray.$add(email);
    };
    
    this.getEmails = function(email) {
        return new Firebase('https://np-personal-site.firebaseio.com/' + '/admin');
    };
    
    this.authObject = $firebaseAuth(ref);
     
});
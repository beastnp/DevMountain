angular.module('rtfmApp').controller('threadsCtrl', function ($scope, threadsRef, $firebaseArray, $firebaseAuth, fb, $firebaseObject) {
    
    var ref = new Firebase(fb.url);
    var authObj = $firebaseAuth(ref);
    
    $scope.authObj = authObj;
    
    authObj.$onAuth(function(authData) {
       $scope.authData = authData;
        
        if (authData) {
            var userRef = new Firebase(fb.url + '/users/' + authData.uid),
                user = $firebaseObject(userRef);
            
            user.$loaded().then(function(user) {
                user.lastLogin = new Date().toString();
                user.$save();
                user.$bindTo($scope, 'user');
                
            });
        }
    });
    
    $scope.login = function(user) {
        authObj.$authWithPassword(user).then(function(authData) {
            console.log('login authData', authData);
        }, function(error) {
            alert(error);
        });
    };
    
    $scope.register = function(user) {
        authObj.$authWithPassword(user).then(function(authData) {
            console.log('login authData', authData);
            $scope.login(user);
        }, function(error) {
            alert(error)
        });
    };

    $scope.threads = $firebaseArray(threadsRef);

    $scope.threads.$loaded().then(function (threads) {
        console.log(threads);
    })

    $scope.createThread = function (username, title) {
        $scope.threads.$add({
            username: username,
            title: title
        });
    };

});
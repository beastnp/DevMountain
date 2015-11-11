angular.module('noServerApp').controller('contactCtrl', function ($scope, $http) {

    $scope.email = {
        username: "",
        userEmail: "",
        emailSubject: "",
        emailCompose: ""
    };

    $scope.submit = function () {
        var emailData = {
            key: 'FuAGo8ecRDcpQAeCaI5kew',
            message: {
                from_email: $scope.email.userEmail,
                to: [
                    {
                        email: 'peterson.nick2@gmail.com',
                        type: 'to'
                    }
                ],
                subject: $scope.email.emailSubject,
                html: $scope.email.emailCompose
            }
        };


        var request = {
            method: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: emailData
        };
        console.log(request);
        $http(request)
            .success(function successCallBack(response) {
                console.log(response);
                $scope.email = "";
            });

    };



    // This is the setup for the firebase stuff I ended up not        using.
    //          var currentDate = function() {
    //        var date = new Date();
    //        return date.toLocaleDateString();
    //    };


    //         var time = currentDate();
    //        var emailObj = {
    //            emailDate: time,
    //            emailCompose: $scope.emailCompose,
    //            emailSubject: $scope.emailSubject,
    //            userEmail: $scope.userEmail,
    //            username: $scope.username
    //        };
    //        firebaseService.pushFirebaseArray(emailObj);
    //        $scope.username = '';
    //        $scope.userEmail = '';
    //        $scope.emailSubject = '';
    //        $scope.emailCompose = '';
    //        };


});
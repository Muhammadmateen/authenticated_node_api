


(function() {
'use strict';

    angular.module('myApp')
        .controller('signupController', signupController);

    signupController.$inject = ['$http'];
    
    function signupController($http) {
        var vm = this;

        vm.createUser = function()
        {
            //console.log("User signup creditianls : ",vm.user);

            /*$http.post('/signup',vm.user,{
                    headers:
                        {
                            'Content-Type': 'application/json',
                            'auth':'signup header data'
                        }
            }).then(function (data) {
                console.log("Data after Request : ",data.data);
            },function (error) {
                console.log("Error after Request : ",error);
            });*/


            $http({
                method: 'POST',
                url: '/signup',
                data: vm.user,
                headers: {
                    'Content-Type': 'application/json',
                    'auth':'signup header data'
                }
            }).then(function (data) {
                console.log("Data after Request : ",data.data);
            },function (error) {
                console.log("Error after Request : ",error);
            });


        };
    }
})();
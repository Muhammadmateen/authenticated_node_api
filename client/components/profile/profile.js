


(function() {
    'use strict';

    angular.module('myApp')
        .controller('profileController', profileController);

    profileController.$inject = ['$http'];

    function profileController($http) {
        var vm = this;

        vm.userDeleteData = {
            name:'khan jee Khatam',
            age:85
        };

        vm.deleteUser = function()
        {
            //console.log("User signup creditianls : ",vm.user);

            $http.delete('/profile/'+vm.userDeleteData.name+'/'+vm.userDeleteData.age, {
                    headers:{'id1':'Profile delete header data'}
                }).then(function (data) {
                console.log("Data after Request : ",data);
            },function (error) {
                console.log("Error after Request : ",error);
            });
        };
    }
})();
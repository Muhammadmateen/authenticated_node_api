


(function() {
    'use strict';

    angular.module('myApp')
        .controller('homeController', homeController);

    homeController.$inject = ['$http'];

    function homeController($http) {
        var vm = this;

        vm.userUpdatedData = {
            name:'khan jee',
                age:55
        };

        vm.updateUser = function()
        {

            $http.put("/home",vm.userUpdatedData,{
                headers:
                {
                    'Content-Type': 'application/json',
                    'id1':'Home put header data'
                }
            }).then(function (data) {
                console.log("Data after Request : ",data);
            },function (error) {
                console.log("Error after Request : ",error);
            });
        };
    }
})();
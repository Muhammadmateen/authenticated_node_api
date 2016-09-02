

(function() {
'use strict';

    angular.module('myApp')
        .controller('singinController', singinController);

    singinController.$inject = ['$http'];

    function singinController($http) {
        var vm = this;


        vm.login = function () {
            
           // console.log("user Credintials : ",vm.user);

            $http.get('/signin',{
                params:vm.user,
                headers:{'auth':'singin header data'}
            }).then(function(data)
             {
             console.log("Data in get : ",data);
             },function(error)
             {
             console.log("Error in get : ",error);
             });
        };
        
    }

})();
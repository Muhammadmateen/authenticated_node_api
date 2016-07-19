

(function() {
'use strict';

    angular.module('myApp')
        .controller('singinController', singinController);

    //ControllerController.$inject = ['dependency1'];

    function singinController() {
        var vm = this;


        vm.login = function () {
            
            console.log("user Credintials : ",vm.user);
        };
        
    }

})();
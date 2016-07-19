


(function() {
'use strict';

    angular.module('myApp')
        .controller('signupController', signupController);

    //ControllerController.$inject = ['dependency1'];
    
    function signupController() {
        var vm = this;
        
        vm.createUser = function()
        {
            console.log("User signup creditianls : ",vm.user);
        };
    }
})();
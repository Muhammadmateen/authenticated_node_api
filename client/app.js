


(function () {
    
    'use strict';

    var app = angular.module("myApp",['ui.router'])

        .config(function ($stateProvider,$urlRouterProvider) {
            
            $stateProvider.state('signin',
            {
                url:'/signin',
                templateUrl:'./components/signin/signin.html',
                controller:'singinController',
                controllerAs:'signin'
            })

            .state('signup',{
                url:'/signup',
                templateUrl:'./components/signup/signup.html',
                controller:'signupController',
                controllerAs:'signup'
            })

            // .state('home',{
            //     url:'/home',
            //     views:{
            //         'nav':{
            //                 templateUrl:'',
            //                 controller:'',
            //                 controllerAs:''
            //         },
            //         'main':{
            //                 templateUrl:'',
            //                 controller:'',
            //                 controllerAs:''
            //         }
            //     }
            // })


            $urlRouterProvider.otherwise("signin");

        });


})();
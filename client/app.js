


(function () {
    
    'use strict';

    var app = angular.module("myApp",['ui.router'])

        .config(function ($stateProvider,$urlRouterProvider,$httpProvider) {

            //Default Headers
            //$httpProvider.defaults.headers.common['Authorization'] = "kalalalalalalalaalalaal";
            
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

                .state('home',{
                    url:'/home',
                    templateUrl:'./components/home/home.html',
                    controller:'homeController',
                    controllerAs:'home'
                })

                .state('profile',{
                    url:'/profile',
                    templateUrl:'./components/profile/profile.html',
                    controller:'profileController',
                    controllerAs:'profile'
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


            $urlRouterProvider.otherwise("signup");

        });


})();
angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('anon', {
                abstract: true,
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'MainController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });

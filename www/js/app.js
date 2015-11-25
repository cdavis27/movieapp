'use strict';

angular.module('movieapp.controllers', []);

angular.module('movieapp', [
  'ngRoute',
  'ionic',
  'movieapp.controllers'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/tutorial', {
      templateUrl: 'views/tutorial.html',
      controller: 'TutorialCtrl'
    })
     .when('/gamepin', {
      templateUrl: 'views/gamepin.html',
      controller: 'GameCtrl'
    })
    .when('/game', {
      templateUrl: 'views/game.html',
      controller: 'GameCtrl'
    })
    .when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/scores', {
      templateUrl: 'views/scores.html',
      controller: 'ScoresCtrl'
    })
    .when('/edit', {
      templateUrl: 'views/edit-profile.html',
      controller: 'EditCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

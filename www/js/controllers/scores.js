'use strict';

angular.module('movieapp.controllers')
.controller('ScoresCtrl', ['$scope', '$location', 'UserService',
function($scope, $location, UserService) {
    $scope.user = UserService.getUser();
    $scope.opponents = [
        {
            username: 'Tony Stark',
            score: 21,
            picture: '../img/ron.jpeg)'
        },
        {
            username: 'Han Solo',
            score: 45,
            picture: '../img/ron.jpeg)'
        },
        {
            username: 'Bilbo Baggins',
            score: 32,
            picture: '../img/ron.jpeg)'
        },
        {
            username: 'Hermione Granger',
            score: 98,
            picture: '../img/ron.jpeg)'
        },
        {
            username: 'Pepper Pots',
            score: 12,
            picture: '../img/ron.jpeg)'
        },
        {
            username: 'Katniss Everdeen',
            score: 3,
            picture: '../img/ron.jpeg)'
        }
    ];

    $scope.opponents.push($scope.user);

    $scope.goBack = function () {
        $location.path('/game');
    };

    $scope.goToScores = function () {
        $location.path('/profile');
    };

}]);
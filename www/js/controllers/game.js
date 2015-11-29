'use strict';

angular.module('movieapp.controllers')
.controller('GameCtrl', ['$scope', '$location', 'UserService', 
function($scope, $location, UserService) {

    $scope.user = UserService.getUser();

    $scope.goToScores = function () {
        $location.path('/scores');
    };

    $scope.goToProfile = function () {
        $location.path('/profile');
    };

    $scope.goToGame = function () {
        $location.path('/game');
    };

}]);
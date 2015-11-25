'use strict';

angular.module('movieapp.controllers')
.controller('GameCtrl', ['$scope', '$location', 
function($scope, $location) {

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
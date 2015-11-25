'use strict';

angular.module('movieapp.controllers')
.controller('ScoresCtrl', ['$scope', '$location',
function($scope, $location) {

    $scope.goBack = function () {
        $location.path('/game');
    };

    $scope.goToScores = function () {
        $location.path('/profile');
    };

}]);
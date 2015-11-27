'use strict';

angular.module('movieapp.controllers')
.controller('LoginCtrl', ['$scope', '$location',
function($scope, $location) {

    $scope.goToTutorial = function () {
        $location.path('/tutorial-1');
    };

}]);

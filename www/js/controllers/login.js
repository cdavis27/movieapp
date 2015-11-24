'use strict';

angular.module('movieapp.controllers')
.controller('LoginCtrl', ['$scope', '$location',
function($scope, $location) {
      
    $scope.goTutorial = function () {
        $location.path('/tutorial');
    };

}]);
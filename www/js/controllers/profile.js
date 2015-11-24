'use strict';

angular.module('movieapp.controllers')
.controller('ProfileCtrl', ['$scope', '$location',
function($scope, $location) {

     $scope.goBack = function () {
        $location.path('/game');
    };

}]);
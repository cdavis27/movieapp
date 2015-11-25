'use strict';

angular.module('movieapp.controllers')
.controller('EditCtrl', ['$scope', '$location',
function($scope, $location) {

    $scope.goBack = function () {
        $location.path('/profile');
    };

}]);
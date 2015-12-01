'use strict';

angular.module('movieapp.controllers')
.controller('EditCtrl', ['$scope', '$location', 'UserService',
function($scope, $location, UserService) {
    $scope.user = UserService.getUser();
    
    $scope.goBack = function () {
        $location.path('/profile');
    };

}]);
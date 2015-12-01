'use strict';

angular.module('movieapp.controllers')
.controller('ProfileCtrl', ['$scope', '$location', '$ionicPopup', 'UserService', 
function($scope, $location, $ionicPopup, UserService) {
    $scope.user = UserService.getUser();
    $scope.max = 100;
    $scope.current = $scope.user.points;

    $scope.goBack = function () {
        $location.path('/game');
    };

    $scope.goToEdit = function () {
        $location.path('/edit');
    };

    $scope.showAlert = function() {
        var myPopup = $ionicPopup.show({
        title: 'Show this code to receive a small popcorn',
        subTitle: '890239',
        scope: $scope,
        buttons: [
            { 
                text: '<b>Redeem</b>',
                type: 'button-positive',
                onTap: function(e) {
                    $scope.user.points = 0;
                    UserService.setUser($scope.user);
                }
            }   
        ]
        });
    };

    $scope.getPoints = function() {
        return $scope.user.points;
    }

}]);
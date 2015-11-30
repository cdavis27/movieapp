'use strict';

angular.module('movieapp.controllers')
.controller('LoginCtrl', ['$scope', '$location', '$ionicPopup', 'UserService', 
function($scope, $location, $ionicPopup, UserService) {

    $scope.user = {
        username: '',
        score: 20,
        points: 20
    };

    $scope.goToTutorial = function () {
        UserService.setUser($scope.user);
        $location.path('/tutorial');
    };

    $scope.showAlert = function() {
        var myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="user.username">',
        title: 'Choose a username',
        scope: $scope,
        buttons: [
            { text: 'Cancel' },
            { 
                text: '<b>Play</b>',
                type: 'button-positive',
                onTap: function(e) {
                    if (!$scope.user.username) {
                        e.preventDefault();
                    } else {
                        $scope.goToTutorial();
                        return $scope.user.name;
                    }
                }
            }   
        ]
        });
    };



}]);

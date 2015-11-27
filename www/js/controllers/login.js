'use strict';

angular.module('movieapp.controllers')
.controller('LoginCtrl', ['$scope', '$location', '$ionicPopup',
function($scope, $location, $ionicPopup) {
      
    $scope.goToTutorial = function () {
        $location.path('/tutorial');
    };

    $scope.showAlert = function() {
        var alert = $ionicPopup.prompt({
            title: 'Choose a Username',
            // template: 'Enter your secret password',
            inputType: 'text',
            inputPlaceholder: 'username'
            }).then(function(res) {
                console.log('Your password is', res);
        });
        // var alertPopup = $ionicPopup.alert({
        //     title: 'Choose a username',
        //     template: ''
        // });
    };

}]);
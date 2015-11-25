'use strict';

angular.module('movieapp.controllers')
.controller('ProfileCtrl', ['$scope', '$location', '$ionicPopup',
function($scope, $location, $ionicPopup) {

    $scope.goBack = function () {
        $location.path('/game');
    };

    $scope.goToEdit = function () {
        $location.path('/edit');
    };

    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Redeem',
            template: 'Show this code to receive a small popcorn \n 809234'
        });
    };

}]);
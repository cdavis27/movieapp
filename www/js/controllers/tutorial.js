'use strict';

angular.module('movieapp.controllers')
.controller('TutorialCtrl', ['$scope', '$location', '$ionicSlideBoxDelegate',
function($scope, $location, $ionicSlideBoxDelegate) {
    $scope.activeSlide = 0;

    $scope.goToGame = function () {
        $location.path('/gamepin');
    };


}]);
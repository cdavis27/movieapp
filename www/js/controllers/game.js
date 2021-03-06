'use strict';

angular.module('movieapp.controllers')
.controller('GameCtrl', ['$scope', '$location', 'UserService',
function($scope, $location, UserService) {

    $scope.user = UserService.getUser();

    $scope.goToScores = function () {
        $location.path('/scores');
    };

    $scope.goToProfile = function () {
        $location.path('/profile');
    };

    $scope.goToGame = function () {
        $scope.user.pin = true;
        UserService.setUser($scope.user);
        // print $scope.user
    };

    $scope.addPoints = function(item) {
      if($scope.user.items == null) {
        $scope.user.items = [];
      }

      if($scope.user.items.indexOf(item) == -1) {
        $scope.user.items.push(item);

        $scope.user.points += 20;
        $scope.user.score += 20;

        if($scope.user.points > 100) {
          $scope.user.points = 100;
        }

        var toast = document.getElementById("toast");
        toast.innerHTML = 'You Found: '  + item;
        toast.style.display = 'inline';
        setTimeout(function() {
          toast.style.display = 'none';
        }, 2000);
      }

      UserService.setUser($scope.user);
    };

    $scope.hasEnoughPoints = function() {
      return $scope.user.points >= 100;
    };

}]);

'use strict';

angular.module('movieapp.services')
.service('UserService', [function() {
  var user = {};

  var getUser = function(){
      return user;
  };

  var setUser = function(currentUser){
      user = currentUser
  };

  return {
    setUser: setUser,
    getUser: getUser
  };
  
}]);

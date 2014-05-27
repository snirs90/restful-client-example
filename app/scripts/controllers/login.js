'use strict';

angular.module('myApp')
  .controller('LoginCtrl', function ($scope, Security) {
    $scope.user = {};


    $scope.login = function() {
      Security.login(user, function(res) {
        $location.path('/dashboard');
      });
    }

  });

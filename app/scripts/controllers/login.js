'use strict';

angular.module('myApp')
  .controller('LoginCtrl', ['$scope', '$cookies', 'Security', function($scope, $cookies, Security) {
    $scope.user = {};


    $scope.login = function() {
      Security.login($scope.user, function(res) {
        // Success.

        $location.path('/dashboard');
      },
      function(res) {
        // Error.

        console.log('Error in login');
      });
    }

  }]);

'use strict';

angular.module('myApp')
  .controller('LoginCtrl', ['$scope', '$cookies', 'Security', 'User',  function($scope, $cookies, Security, User) {
    $scope.user = {};


    $scope.login = function() {
      Security.login($scope.user).then(function(data) {
        console.log(data);
        if (data.status !== "undefined" && data.token) {
          User.setUserDetails(data);
        }
      }, function(data, status, headers, config) {
        console.log("Error: ");
        console.table(data, status, headers, config);
      });
        //, function(res) {
        // Success.

      /*  },
      function(res) {
        // Error.

        console.log('Error in login');
      });*/
    }

  }]);

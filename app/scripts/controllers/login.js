'use strict';

angular.module('myApp')
  .controller('LoginCtrl', ['$scope', '$cookies', '$location', 'Auth', 'User', function($scope, $cookies, $location, Auth, User) {

    Auth.status(function() {
      if (User.getUserDetails().status == true) {
        $location.url('/dashboard');
      }
      else {

      }
    },
    function() {
      User.clear();
    });

    $scope.user = {};
    $scope.login_error = null;

    $scope.login = function() {

      Auth.login($scope.user)
        .success(function(data) {
          if (!data.error) {
            User.setUserDetails(data);

            $location.url('/dashboard');
          }
          else {
            $scope.login_error = data.description;
          }
        })
        .error(function(data, status, headers, config) {
          $scope.login_error = 'Login failed.';
        });
    }

  }]);

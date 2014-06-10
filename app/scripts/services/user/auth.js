'use strict';

angular.module('myApp').
  service('Auth', ['$http', '$q', 'User', function($http, $q, User) {

    this.status = function(success, error) {
      $http.get('http://127.0.0.1/restful-login.php?status=1').success(function(res) {
        if (res.status !== "undefined" && res.token) {
          User.setDetails(res);
          success();
        }
      }).error(error);
    }

    this.login = function(user) {
      return $http.post('http://127.0.0.1/restful-login.php', user,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          transformRequest: function(data){
            return $.param(data);
          }
        }
      );
    }

    this.logout = function(success, error) {
      $http.post('http://127.0.0.1/restful-login.php?logout=1').success(function(res) {
        User.clear();
        success();
      }).error(error);
    }

  }]);

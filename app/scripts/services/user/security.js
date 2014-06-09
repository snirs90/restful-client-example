'use strict';

angular.module('myApp').
  service('Security', function($http, User) {

    this.status = function(success, error) {
      $http.get('http://127.0.0.1/login.php?status=1').success(function(res) {
        if (res.status !== "undefined" && res.token) {
          User.setDetails(res);
          success();
        }
      }).error(error);
    }

    this.login = function(user, success, error) {
      $http.post('http://127.0.0.1/login.php', user,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          transformRequest: function(data){
            return $.param(data);
          }
        }
      ).success(function(res) {
        if (res.status !== "undefined" && res.token) {
          User.setUserDetails(res);
          success();
        }
        else {
          error();
        }
      }).error(error);
    }

    this.logout = function(success, error) {
      $http.post('http://127.0.0.1/login.php?logout=1').success(function(res) {
        User.clear();
        success();
      }).error(error);
    }

  });

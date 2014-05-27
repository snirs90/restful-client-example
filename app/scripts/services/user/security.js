'use strict';

angular.module('myApp').
  service('Security', function($http, User) {

    this.status = function(success, error) {
      $http.get('/status').success(function(res) {
        User.setDetails(res);
        success();
      }).error(error);
    }

    this.login = function(user, success, error) {
      $http.post('/login').success(function(res) {
        User.setUserDetails(res);
        success();
      }).error(error);
    }

    this.logout = function(success, error) {
      $http.post('/logout').success(function(res) {
        User.clear();
        success();
      }).error(error);
    }

  });

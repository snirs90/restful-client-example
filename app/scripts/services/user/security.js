'use strict';

angular.module('myApp').
  service('Security', ['$http', '$q', 'User', function($http, $q, User) {

    this.status = function(success, error) {
      $http.get('http://127.0.0.1/restful-login.php?status=1').success(function(res) {
        if (res.status !== "undefined" && res.token) {
          User.setDetails(res);
          success();
        }
      }).error(error);
    }

    this.login = function(user) {

      var deferred = $q.defer();
      $http.post('http://127.0.0.1/restful-login.php', user,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          transformRequest: function(data){
            return $.param(data);
          }
        }
      ).success(function(data) {
        deferred.resolve(data);
      }).error(function(data, status) {
            deferred.reject(status);
      });

      return deferred.promise;
      /*.success(function(res) {
        if (res.status !== "undefined" && res.token) {
          User.setUserDetails(res);
          success();
        }
        else {
          error();
        }
      }).error(error);*/
    }

    this.logout = function(success, error) {
      $http.post('http://127.0.0.1/restful-login.php?logout=1').success(function(res) {
        User.clear();
        success();
      }).error(error);
    }

  }]);

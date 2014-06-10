'use strict';

angular.module('myApp').
  service('User', function($localStorage) {
    this.storage = $localStorage;

    this.setUserDetails = function(userDetails) {
      this.storage.userDetails = userDetails;
    }

    this.getUserDetails = function() {
      return this.storage.userDetails;
    }

    this.clear = function() {
      delete this.storage.userDetails;
    }

  })

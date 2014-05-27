'use strict';

angular
  .module('myApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'apiMock',
    'ngStorage'
  ])
  .config(function ($routeProvider, apiMockProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Add configuration of the apiMock.
    apiMockProvider.config({
      mockDataPath: '/data-mock/',
      apiPath: '/'
    });
  });

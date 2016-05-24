'use strict';

/**
 * @ngdoc overview
 * @name angularCodeTestApp
 * @description
 * # angularCodeTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularCodeTestApp', [    
    'ngResource',
    'ngRoute',        
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });

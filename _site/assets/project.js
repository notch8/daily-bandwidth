(function() {
  window.app = angular.module('dailybandwidth', ['ngRoute', 'firebase', 'ui.bootstrap']).value('firebaseURL', 'http://dailybandwidth.firebaseIO.com').service('weekService', function(firebaseURL) {
    return new app.WeekService(firebaseURL);
  }).service('alertService', function() {
    return new app.AlertService;
  }).config([
    '$interpolateProvider', function($interpolateProvider) {
      $interpolateProvider.startSymbol('{[');
      return $interpolateProvider.endSymbol(']}');
    }
  ]).config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
      templateUrl: '/home.html',
      controller: 'app.HomeController',
      authRequired: true,
      pathTo: '/home'
    });
    $routeProvider.when('/login', {
      templateUrl: '/login.html',
      controller: 'app.LoginController',
      authRequired: false,
      pathTo: '/login'
    });
    return $routeProvider.when('/settings', {
      templateUrl: '/settings.html',
      controller: 'app.SettingsController',
      authRequired: true,
      pathTo: '/settings'
    });
  });

}).call(this);

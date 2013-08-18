window.app = angular.module('dailybandwidth',['ngRoute', 'firebase', 'ui.bootstrap']).

value('firebaseURL', 'http://dailybandwidth.firebaseIO.com').

service('weekService', (firebaseURL)->
  new app.WeekService(firebaseURL)
).

service('alertService',->
  new app.AlertService
).

config(['$interpolateProvider',
  ($interpolateProvider) ->
    $interpolateProvider.startSymbol('{[')
    $interpolateProvider.endSymbol(']}')
]).

config(($routeProvider, $locationProvider)->
  $routeProvider.when('/home',
    templateUrl: '/home.html'
    controller:  'app.HomeController'
    authRequired: true
    pathTo: '/home'
  )
  $routeProvider.when('/login',
    templateUrl: '/login.html'
    controller:  'app.LoginController'
    authRequired: false
    pathTo: '/login'
  ) 

  $routeProvider.when('/settings',
    templateUrl: '/settings.html'
    controller:  'app.SettingsController'
    authRequired: true
    pathTo: '/settings'
  ) 
)



window.app = angular.module('dailybandwidth',['ngRoute', 'firebase', 'ui.bootstrap']).
value('dailyBandwidthViewFirebaseURL', 'http://dailybandwidth.firebaseIO.com/weeks').
factory('Weeks', (angularFireCollection, dailyBandwidthViewFirebaseURL)->
  angularFireCollection(dailyBandwidthViewFirebaseURL)
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
)



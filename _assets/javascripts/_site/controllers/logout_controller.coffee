app.LogoutController = ($scope, $route, $location, angularFireAuth)->
  $scope.logout = ->
    angularFireAuth.logout()

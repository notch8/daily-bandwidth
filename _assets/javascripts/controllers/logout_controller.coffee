app.LogoutController = ($scope, $route, $location, angularFireAuth, alertService)->
  $scope.logout = ->
    alertService.clear()
    angularFireAuth.logout()

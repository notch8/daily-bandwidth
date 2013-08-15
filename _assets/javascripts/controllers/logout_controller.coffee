app.LogoutController = ($scope, $route, $location, angularFireAuth)->
  $scope.$on("angularFireAuth:login", (evt, user) ->
    $scope.shouldHide = false
  )

  $scope.$on("angularFireAuth:logout", (evt, user) ->
    $scope.shouldHide = true
  )

  $scope.logout = ->
    angularFireAuth.logout()

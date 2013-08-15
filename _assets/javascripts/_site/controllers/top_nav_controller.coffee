app.TopNavController = ($scope)->
  $scope.$on("angularFireAuth:login", (evt, user) ->
    $scope.shouldShowLogout = true
    $scope.shouldShowSettings = true
  )

  $scope.$on("angularFireAuth:logout", (evt, user) ->
    $scope.shouldShowLogout = false
    $scope.shouldShowSettings = false
  )


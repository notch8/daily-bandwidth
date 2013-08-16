app.TopNavController = ($scope)->
  $scope.$on("angularFireAuth:login", (evt, user) ->
    $scope.shouldShowHome = true
    $scope.shouldShowLogout = true
    $scope.shouldShowSettings = true
  )

  $scope.$on("angularFireAuth:logout", (evt, user) ->
    $scope.shouldShowHome = false
    $scope.shouldShowLogout = false
    $scope.shouldShowSettings = false
  )


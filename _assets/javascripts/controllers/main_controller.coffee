app.MainController = ($scope, $route, angularFireAuth)->
  url = 'https://dailybandwidth.firebaseIO.com'
  angularFireAuth.initialize(url, {scope: $scope, name: "user"})

  $scope.$on("angularFireAuth:login", (evt, user) ->
    $scope.loadUserSettings()
  ) 

  $scope.loadUserSettings= ->
    url = "https://dailybandwidth.firebaseIO.com/#{$scope.user.login}/settings"
    $scope.settingsStore = new Firebase(url)
    $scope.settingsStore.on('value', (settings)->
      $scope.settings = settings.val()
      window.location = '/project.html#/home'
    ) 


  $scope.$on("angularFireAuth:logout", (evt)->
    window.location = '/project.html#/login'
  )


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
      setTimeout((->
        if settings.val() == null
          $scope.settings = $scope.settingsDefaults
        else
          $scope.settings = settings.val()
          $scope.$apply()
        $scope.settingsStore.off('value')
      ),1) 
    )


  $scope.$on("angularFireAuth:logout", (evt)->
    window.location = '/project.html#/login'
  )

  $scope.settingsDefaults = {
    defaultBandwidths: [
      {name: 'Monday', hours: 0},
      {name: 'Tuesday',hours: 0},
      {name: 'Wednesday', hours: 0},
      {name: 'thursday', hours: 0},
      {name: 'friday', hours: 0},
      {name: 'saturday', hours: 0},
      {name: 'sunday', hours: 0}
    ]
    projects: []
    sharesWith: []
  }
 


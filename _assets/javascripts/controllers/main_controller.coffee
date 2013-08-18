app.MainController = ($scope, $route, angularFireAuth)->
  url = 'https://dailybandwidth.firebaseIO.com'
  angularFireAuth.initialize(url, {scope: $scope, name: "user",  path: "/login"})

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

  $scope.$on("angularFireAuth:login", (evt)->
    if window.location.hash == '#/login'
      window.location = '/project.html#/home'
  )

  $scope.settingsDefaults = {
    defaultBandwidths: [
      {name: 'Monday', hours: 0},
      {name: 'Tuesday',hours: 0},
      {name: 'Wednesday', hours: 0},
      {name: 'Thursday', hours: 0},
      {name: 'Friday', hours: 0},
      {name: 'Saturday', hours: 0},
      {name: 'Sunday', hours: 0}
    ]
    projects: []
    sharesWith: []
  }
 


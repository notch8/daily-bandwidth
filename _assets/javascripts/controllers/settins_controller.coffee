app.SettingsController = ($scope, $timeout, SettingsStore)->
  $scope.$watch('user',(user)->
    if user
      url = "https://dailybandwidth.firebaseIO.com/#{$scope.user.login}/settings"
      $scope.settingsStore = new Firebase(url)
      $scope.settingsStore.on('value', (settings)->
        if settings.val() == null
          $scope.settings = 
            defaults
        else
          $scope.settings = settings.val()
          
        setTimeout((->
          $scope.$apply()
        ),1) 
      )

  )
  $scope.resetDefaults = ->
    $scope.settings = $scope.defaults
    console.log $scope.settings
    $scope.settingsStore.set($scope.settings,(error)->
      $scope.$apply
      console.log 'done'
    )
    console.log('hello')


  $scope.addNewProject = ->
    $scope.settings.projects = [] unless $scope.settings.projects
    $scope.settings.projects.push
      name: null
      commitment: null
      commitment_scope: null

  $scope.addShare = ->
    $scope.settings.sharesWith = [] unless $scope.settings.sharesWith
    $scope.settings.sharesWith.push(
      email: $scope.newEmail
    )
    console.log($scope.settings)
    $scope.settingsStore.set($scope.settings)


  $scope.defaults = {
    # defaultBandwidths: [
      # {name: 'Monday', hours: 0},
      # {name: 'Tuesday',hours: 0},
      # {name: 'Wednesday', hours: 0},
      # {name: 'thursday', hours: 0},
      # {name: 'friday', hours: 0},
      # {name: 'saturday', hours: 0},
      # {name: 'sunday', hours: 0}
      # ]

    defaultBandwidths: 
       Monday: 0
       Tuesday: 0
       Wednesday: 0
       Thursday: 0
       Friday: 0
       Saturday: 0
       Sunday: 0
    projects: []
    sharesWith: []
  }

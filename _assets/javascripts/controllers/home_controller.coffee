app.HomeController = ($scope)->
  $scope.$on("angularFireAuth:login", (evt, user) ->
    $scope.loadUserSettings()
    $scope.baseUrl = "https://dailybandwidth.firebaseIO.com/#{$scope.user.login}/weeks"
  ) 

  $scope.loadUserSettings= ->
    url = "https://dailybandwidth.firebaseIO.com/#{$scope.user.login}/settings"
    $scope.settingsStore = new Firebase(url)
    $scope.settingsStore.on('value', (settings)->
      $scope.settings = settings.val()
      $scope.$apply
      $scope.loadWeek()
    ) 

  $scope.loadWeek= ->
    $scope.today = new XDate()
    $scope.today_year = $scope.today.getFullYear()
    $scope.today_week = $scope.today.getWeek()
    $scope.today_day = $scope.today.getDay()
    $scope.beginningOfWeek = $scope.today.clone().setWeek($scope.today_week, $scope.today_year)
    url = "#{$scope.baseUrl}/#{$scope.today_year}/#{$scope.today_week}"
    $scope.bandwidthStore = new Firebase(url)
    $scope.bandwidthStore.on('value',(bandwidths)->
      $scope.bandwidths = bandwidths.val()
      if $scope.bandwidths == null
        $scope.loadDefaults()
        $scope.bandwidthStore.set($scope.bandwidths)

      $scope.$apply
      console.log 'sssssss'
      console.log $scope.bandwidths[0]
    )


  $scope.loadDefaults =->
    $scope.bandwidths = []
    $scope.setupDaysForProject(project) for project in $scope.settings.projects

  $scope.setupDaysForProject=(project)->
    $scope.bandwidths.push({name: project.name, days:[0,0,0,0,0,0,0]})

  $scope.loadPreviousWeek = ->
    console.log 'load previous'
    console.log $scope.user

  $scope.loadThisWeek = ->
    console.log 'load this week'

  $scope.loadNextWeek = ->
    console.log 'load next week'

  $scope.duplicatePreviousWeek = ->
    console.log 'duplicate previous'

  $scope.clearWeek = ->
    $scope.loadDefaults()
    $scope.bandwidthStore.set($scope.bandwidths)
    $scope.$apply

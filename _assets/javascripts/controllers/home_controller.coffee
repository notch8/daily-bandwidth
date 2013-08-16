app.HomeController = ($scope)->
  $scope.$watch('user',(user, oldUser)->
    $scope.baseUrl = "https://dailybandwidth.firebaseIO.com/#{$scope.user.login}/weeks"
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
        $scope.saveBandwidths()

      setTimeout((->
        $scope.$apply()
      ),1)
    )
  )

  $scope.saveBandwidths=->
    $scope.bandwidthStore.set($scope.bandwidths)


  $scope.loadDefaults =->
    console.log 'loadDefaults'
    console.log $scope.settings
    $scope.bandwidths = []
    $scope.setupDaysForProject(project) for project in $scope.settings.projects

  $scope.setupDaysForProject=(project)->
    $scope.bandwidths.push({name: project.name, days: [0,0,0,0,0,0,0]})

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
    $scope.saveBandwidths()

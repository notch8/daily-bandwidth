app.HomeController = ($scope, alertService)->
  $scope.$watch('user',(user, oldUser)->
    if user
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


  $scope.nextSave = null
  $scope.saveBandwidths = ->
    $scope.nextSave = new XDate()
    $scope.nextSave.addSeconds(1)
    $scope.checkSave()

  $scope.checkSave = ->
      if $scope.nextSave
        now = new XDate()
        if now > $scope.nextSave
          $scope.settingsStore.set(angular.fromJson(angular.toJson($scope.bandwidths)), (error)->
            if error
              alertService.addError 'Error.  we could not make your change.  Please try again.'
            else
              alertService.addSuccess 'Success,  we updated your bandwidth.'      
          )
          $scope.nextSave = null
        else
          setTimeout((-> $scope.checkSave()),500) 


  $scope.loadDefaults =->
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

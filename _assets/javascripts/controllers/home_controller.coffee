app.HomeController = ($scope, weekService, alertService)->
  $scope.today = new XDate()
  $scope.nextSave = null
  $scope.$watch('settings',(settings)->
    if settings
      weekService.setUser($scope.user)
      weekService.setSettings(settings)
      $scope.week = weekService.thisWeek($scope)
  )

  $scope.doneLoadingWeek = ->
    $scope.$apply()

  $scope.loadPreviousWeek = ->
    $scope.week = weekService.getPrevious($scope.week, $scope)

  $scope.loadThisWeek = ->
    $scope.week = weekService.thisWeek($scope)

  $scope.loadNextWeek = ->
    $scope.week = weekService.getNext($scope.week, $scope)


  $scope.saveBandwidths = ->
    $scope.week.save()

  $scope.duplicatePreviousWeek = ->
    tempScope = {
      doneLoadingWeek: (week)->
        $scope.week.cloneProjects(week)
        $scope.$apply()
    }

    lastWeek = weekService.getPrevious($scope.week, tempScope)

  $scope.clearWeek = ->
    $scope.week.reset($scope.settings.projects)


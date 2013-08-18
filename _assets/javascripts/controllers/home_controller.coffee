app.HomeController = ($scope, weekService, alertService)->
  $scope.today = new XDate()
  $scope.nextSave = null

  console.log $scope.settings

  $scope.$watch('settings',(settings)->
    if settings
      weekService.setUser($scope.user)
      weekService.setSettings(settings)
      $scope.week = weekService.thisWeek($scope)
  )

  $scope.doneLoadingWeek = ->
    setTimeout((->
      $scope.$apply()
    ),1)

  $scope.loadPreviousWeek = ->
    $scope.week = weekService.getPrevious($scope.week, $scope)

  $scope.loadThisWeek = ->
    $scope.week = weekService.thisWeek($scope)

  $scope.loadNextWeek = ->
    $scope.week = weekService.getNext($scope.week, $scope)


  $scope.saveBandwidths = ->
    console.log 'saving'
    $scope.week.save()

  $scope.duplicatePreviousWeek = ->
    console.log 'duplicating'

  $scope.clearWeek = ->
    console.log 'clearing'
    $scope.week.reset($scope.settings.projects)

  # $scope.checkSave = ->
  #     if $scope.nextSave
  #       now = new XDate()
  #       if now > $scope.nextSave
  #         $scope.bandwidthStore.set(angular.fromJson(angular.toJson($scope.bandwidths)), (error)->
  #           if error
  #             alertService.addError 'Error.  we could not make your change.  Please try again.'
  #           else
  #             alertService.addSuccess 'Success,  we updated your bandwidth.'      
  #         )
  #         $scope.nextSave = null
  #       else
  #         setTimeout((-> $scope.checkSave()),500) 



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
    # $scope.nextSave = new XDate()
    # $scope.nextSave.addSeconds(1)
    # $scope.checkSave()

  $scope.duplicatePreviousWeek = ->
    console.log 'duplicating'
    # date = $scope.today.clone().addWeeks(-1)
    # store = $scope.getBandwidthStore(date.getWeek(), date.getFullYear())
    # store.on('value',(bandwidths)->
    #   $scope.bandwidths = angular.fromJson(angular.toJson(bandwidths.val()))
    # )


  $scope.clearWeek = ->
    console.log 'clearing'
  # $scope.setupBandwidthTable =->
  #   $scope.bandwidthStore = $scope.getBandwidthStore()
  #   $scope.bandwidthStore.on('value',(bandwidths)->
  #     $scope.bandwidths = angular.fromJson(angular.toJson(bandwidths.val()))
  #     console.log 'here are the bandwidths'
  #     console.log $scope.bandwidths
  #     if $scope.bandwidths == null
  #       $scope.loadDefaults()

  #     setTimeout((->
  #       $scope.$apply()
  #     ),1)
  #   )

  # $scope.getBandwidthStore = (weekNumber, year)->
  #   weekNumber ||= $scope.today_week
  #   year ||= $scope.today_year
  #   baseUrl = "https://dailybandwidth.firebaseIO.com/#{$scope.user.login}/weeks"
  #   url = "#{baseUrl}/#{year}/#{weekNumber}"
  #   console.log url
  #   new Firebase(url)

  # $scope.parseDate = ->
  #   $scope.today_year = $scope.today.getFullYear()
  #   $scope.today_week = $scope.today.getWeek()
  #   $scope.today_day = $scope.today.getDay()
  #   $scope.beginningOfWeek = $scope.today.clone().setWeek($scope.today_week, $scope.today_year)

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



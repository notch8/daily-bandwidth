app.BandwidthContainerController = ($scope)->
  $scope.$watch('day.hours',(newVal, oldVal)->
    if newVal != oldVal
      $scope.saveBandwidths()
  )

  $scope.decrement=->
    if $scope.day.hours >= 1 
      $scope.day.hours -= 1

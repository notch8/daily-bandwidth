app.BandwidthContainerController = ($scope)->
  $scope.$watch('bandwidth',(newVal, oldVal)->
    if newVal != oldVal
      $scope.project.days[$scope.$index] = newVal
      $scope.saveBandwidths()
  )

  $scope.decrement=->
    if $scope.bandwidth >= 1 
      $scope.bandwidth -= 1

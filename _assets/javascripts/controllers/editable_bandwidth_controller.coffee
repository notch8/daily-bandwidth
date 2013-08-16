app.EditableBandwidthController = ($scope)->
  $scope.isEditEnabled = false

  $scope.$watch('hours',(newVal, oldVal)->
    if newVal != oldVal
      $scope.settingsStore.set($scope.settings)
  )


  $scope.decrement=->
    if $scope.hours >= 1 
      $scope.weekday.hours -= 1

  $scope.increment=->
    $scope.weekday.hours += 1


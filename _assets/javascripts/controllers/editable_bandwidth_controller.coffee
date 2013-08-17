app.EditableBandwidthController = ($scope)->
  $scope.isEditEnabled = false

  $scope.$watch('weekday.hours',(newVal, oldVal)->
    if newVal != oldVal
      $scope.saveSettings()
  )


  $scope.decrement=->
    if $scope.weekday.hours >= 1 
      $scope.weekday.hours -= 1

  $scope.increment=->
    $scope.weekday.hours += 1


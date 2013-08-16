app.EditableBandwidthController = ($scope)->
  $scope.isEditEnabled = false

  $scope.$watch('weekday.hours',(newVal, oldVal)->
    if newVal != oldVal
      $scope.settingsStore.set($scope.settings)
  )


  $scope.decrement=->
    if $scope.weekday.hours >= 1 
      $scope.weekday.hours -= 1


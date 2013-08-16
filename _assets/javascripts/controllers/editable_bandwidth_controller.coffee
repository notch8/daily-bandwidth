app.EditableBandwidthController = ($scope)->
  $scope.isEditEnabled = false

  $scope.$watch('weekday.hours',(newVal)->
    $scope.settingsStore.set($scope.settings)
  )


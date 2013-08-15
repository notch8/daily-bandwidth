app.EditableSharingController = ($scope)->
  $scope.remove = ->
    console.log $scope.settings
    $scope.settings.sharesWith.pop($scope.share)
    $scope.settingsStore.set($scope.settings)
